import { prisma } from "../src/server/db"
import type { StateRes } from "./types";


const clearDb = async () => {
    await prisma.state.deleteMany({})
}

const seedState = async () => {
    const res = await fetch("https://jianliew.me/malaysia-api/state/v1/all.json")
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const states: StateRes[] = await res.json()

    for (const state of states) {
        await prisma.state.create({
            data: {
                name: state.state,
                unique_name: state.state.toLowerCase().replace(" ", "-"),
            }
        })
    }
}

async function main() {
    await clearDb()
    await seedState()
}

void main()