import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BattleCompleted } from "../generated/schema"
import { BattleCompleted as BattleCompletedEvent } from "../generated/GameSystem/GameSystem"
import { handleBattleCompleted } from "../src/game-system"
import { createBattleCompletedEvent } from "./game-system-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let battleId = BigInt.fromI32(234)
    let player = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let characterId = BigInt.fromI32(234)
    let victory = "boolean Not implemented"
    let rewardAmount = BigInt.fromI32(234)
    let timestamp = BigInt.fromI32(234)
    let newBattleCompletedEvent = createBattleCompletedEvent(
      battleId,
      player,
      characterId,
      victory,
      rewardAmount,
      timestamp
    )
    handleBattleCompleted(newBattleCompletedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BattleCompleted created and stored", () => {
    assert.entityCount("BattleCompleted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BattleCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "battleId",
      "234"
    )
    assert.fieldEquals(
      "BattleCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "player",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BattleCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "characterId",
      "234"
    )
    assert.fieldEquals(
      "BattleCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "victory",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "BattleCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rewardAmount",
      "234"
    )
    assert.fieldEquals(
      "BattleCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
