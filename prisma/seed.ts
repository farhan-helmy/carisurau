/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { prisma } from "../src/server/db"
import type { DistrictRes, StateRes } from "./types";
import mallJson from "./mall.json"

const clearDb = async () => {
    await prisma.state.deleteMany({})
    await prisma.mall.deleteMany({})
    await prisma.district.deleteMany({})
}

const seedState = async () => {
    const res = await fetch("https://jianliew.me/malaysia-api/state/v1/all.json")
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

const seedDistrict = async () => {
    const states = await prisma.state.findMany()
    for (const state of states) {
        if (state.name === "Labuan") return
        const res = await fetch(`https://jianliew.me/malaysia-api/state/v1/${state.name.toLowerCase().replace(" ", "_")}.json`)
        const district: DistrictRes = await res.json()
        for (const districtName of district.administrative_districts) {
            await prisma.district.create({
                data: {
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

const seedKlMall = async () => {
    // console.log(mallJson.data.kl)
    const klStateRes = await prisma.state.findUnique({
        where: {
            unique_name: "kuala-lumpur"
        }
    })
    const klDisRes = await prisma.district.create({
        data: {
            name: "Kuala Lumpur",
            unique_name: "kl",
            state: {
                connect: {
                    id: klStateRes?.id
                }
            }

        }
    })
    for (const mall of mallJson.data.federalTerritories.district.kualaLumpur.mall) {
        await prisma.mall.create({
            data: {
                name: mall,
                label: mall,
                value: mall.toLocaleLowerCase().replace(" ", "-"),
                district: {
                    connect: {
                        id: klDisRes.id
                    }
                },
                state: {
                    connect: {
                        id: klStateRes?.id
                    }
                }
            }
        })
    }
}

const seedPutrajayaMall = async () => {
    // console.log(mallJson.data.putrajaya)
    const putrajayaStateRes = await prisma.state.findUnique({
        where: {
            unique_name: "putrajaya"
        }
    })
    const putrajayaDisRes = await prisma.district.create({
        data: {
            name: "wp putrajaya",
            unique_name: "wp-putrajaya",
            state: {
                connect: {
                    id: putrajayaStateRes?.id
                }
            }

        }
    })
    for (const mall of mallJson.data.federalTerritories.district.Putrajaya.mall) {
        await prisma.mall.create({

            data: {
                name: mall,
                label: mall,
                value: mall.toLocaleLowerCase().replace(" ", "-"),
                district: {
                    connect: {
                        id: putrajayaDisRes.id
                    }
                },
                state: {
                    connect: {
                        id: putrajayaStateRes?.id
                    }
                }
            }
        })
    }
}


const seedJohorMall = async () => {
    // console.log(mallJson.data.johor.disctrict)
    const johorStateRes = await prisma.state.findUnique({
        where: {
            unique_name: "johor"
        }
    })

    for (const district in mallJson.data.Johor.district) {
        // console.log(district.toLocaleLowerCase().replace(" ", "-"))
        // get mall value inside district
        const mall = mallJson.data.Johor.district[district as keyof typeof mallJson.data.Johor.district]
        await prisma.district.findUnique({
            where: {
                unique_name: district.toLocaleLowerCase().replace(" ", "-")
            }
        }).then(async (res) => {
            if (res) {
                for (const mallName of mall.mall) {
                    await prisma.mall.create({
                        data: {
                            name: mallName,
                            label: mallName,
                            value: mallName.toLocaleLowerCase().replace(" ", "-"),
                            district: {
                                connect: {
                                    id: res.id
                                }
                            },
                            state: {
                                connect: {
                                    id: johorStateRes?.id
                                }
                            }
                        }
                    })
                }
            }
        }
        )
    }
}

const seedKedahMall = async () => {
    const kedahStateRes = await prisma.state.findUnique({
        where: {
            unique_name: "kedah"
        }
    })
    for (const district in mallJson.data.Kedah.district) {
        const mall = mallJson.data.Kedah.district[district as keyof typeof mallJson.data.Kedah.district]
        await prisma.district.findUnique({
            where: {
                unique_name: district.toLocaleLowerCase().replace(" ", "-")
            }
        }).then(async (res) => {
            if (res) {
                for (const mallName of mall.mall) {
                    await prisma.mall.create({
                        data: {
                            name: mallName,
                            label: mallName,
                            value: mallName.toLocaleLowerCase().replace(" ", "-"),
                            district: {
                                connect: {
                                    id: res.id
                                }
                            },
                            state: {
                                connect: {
                                    id: kedahStateRes?.id
                                }
                            }
                        }
                    })
                }
            }
        })
    }

}

async function main() {
    await clearDb()
    await seedState()
    await seedDistrict()
    await seedPutrajayaMall()
    await seedKlMall()
    await seedJohorMall()
    await seedKedahMall()
}

void main()