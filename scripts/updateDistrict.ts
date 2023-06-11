/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { prisma } from "../src/server/db"
import type { DistrictRes } from "../prisma/types";


const checkNewDistrictAndUpdate = async () => {
    const states = await prisma.state.findMany()
    
    for (const state of states) {
        if (state.name === "Labuan") return
        const res = await fetch(`https://jianliew.me/malaysia-api/state/v1/${state.name.toLowerCase().replace(" ", "_")}.json`)
        const district: DistrictRes = await res.json()
        for (const districtName of district.administrative_districts) {
            await prisma.district.upsert({
                where: {
                    unique_name: districtName.toLowerCase().replace(" ", "-")
                },
                update: {},
                create: {
                    name: districtName,
                    unique_name: districtName.toLowerCase().replace(" ", "-"),
                    state: {
                        connect: {
                            id: state.id
                        }
                    }
                }
            })
        }
    }
}

async function main() {
    await checkNewDistrictAndUpdate()
}

void main()