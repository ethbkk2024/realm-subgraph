import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BattleCompleted,
  BattleStarted,
  ForceDistributionExecuted,
  GameInitialized,
  GameServerChanged,
  GameStateChanged,
  MultiplierUpdated,
  OwnershipTransferred,
  PlayerRankChanged,
  PlayerScoreUpdated,
  QuestCompleted,
  QuestStarted,
  RewardPoolUpdated,
  WeeklyRewardsDistributed
} from "../generated/GameSystem/GameSystem"

export function createBattleCompletedEvent(
  battleId: BigInt,
  player: Address,
  characterId: BigInt,
  victory: boolean,
  rewardAmount: BigInt,
  timestamp: BigInt
): BattleCompleted {
  let battleCompletedEvent = changetype<BattleCompleted>(newMockEvent())

  battleCompletedEvent.parameters = new Array()

  battleCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "battleId",
      ethereum.Value.fromUnsignedBigInt(battleId)
    )
  )
  battleCompletedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  battleCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "characterId",
      ethereum.Value.fromUnsignedBigInt(characterId)
    )
  )
  battleCompletedEvent.parameters.push(
    new ethereum.EventParam("victory", ethereum.Value.fromBoolean(victory))
  )
  battleCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardAmount",
      ethereum.Value.fromUnsignedBigInt(rewardAmount)
    )
  )
  battleCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return battleCompletedEvent
}

export function createBattleStartedEvent(
  battleId: BigInt,
  player: Address,
  characterId: BigInt,
  enemyId: BigInt,
  timestamp: BigInt
): BattleStarted {
  let battleStartedEvent = changetype<BattleStarted>(newMockEvent())

  battleStartedEvent.parameters = new Array()

  battleStartedEvent.parameters.push(
    new ethereum.EventParam(
      "battleId",
      ethereum.Value.fromUnsignedBigInt(battleId)
    )
  )
  battleStartedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  battleStartedEvent.parameters.push(
    new ethereum.EventParam(
      "characterId",
      ethereum.Value.fromUnsignedBigInt(characterId)
    )
  )
  battleStartedEvent.parameters.push(
    new ethereum.EventParam(
      "enemyId",
      ethereum.Value.fromUnsignedBigInt(enemyId)
    )
  )
  battleStartedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return battleStartedEvent
}

export function createForceDistributionExecutedEvent(
  weekNumber: BigInt,
  triggeredBy: Address,
  totalDistributed: BigInt,
  timestamp: BigInt
): ForceDistributionExecuted {
  let forceDistributionExecutedEvent = changetype<ForceDistributionExecuted>(
    newMockEvent()
  )

  forceDistributionExecutedEvent.parameters = new Array()

  forceDistributionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "weekNumber",
      ethereum.Value.fromUnsignedBigInt(weekNumber)
    )
  )
  forceDistributionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "triggeredBy",
      ethereum.Value.fromAddress(triggeredBy)
    )
  )
  forceDistributionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "totalDistributed",
      ethereum.Value.fromUnsignedBigInt(totalDistributed)
    )
  )
  forceDistributionExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return forceDistributionExecutedEvent
}

export function createGameInitializedEvent(
  owner: Address,
  realmToken: Address,
  nftContract: Address
): GameInitialized {
  let gameInitializedEvent = changetype<GameInitialized>(newMockEvent())

  gameInitializedEvent.parameters = new Array()

  gameInitializedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  gameInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "realmToken",
      ethereum.Value.fromAddress(realmToken)
    )
  )
  gameInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "nftContract",
      ethereum.Value.fromAddress(nftContract)
    )
  )

  return gameInitializedEvent
}

export function createGameServerChangedEvent(
  newServer: Address
): GameServerChanged {
  let gameServerChangedEvent = changetype<GameServerChanged>(newMockEvent())

  gameServerChangedEvent.parameters = new Array()

  gameServerChangedEvent.parameters.push(
    new ethereum.EventParam("newServer", ethereum.Value.fromAddress(newServer))
  )

  return gameServerChangedEvent
}

export function createGameStateChangedEvent(
  isPaused: boolean
): GameStateChanged {
  let gameStateChangedEvent = changetype<GameStateChanged>(newMockEvent())

  gameStateChangedEvent.parameters = new Array()

  gameStateChangedEvent.parameters.push(
    new ethereum.EventParam("isPaused", ethereum.Value.fromBoolean(isPaused))
  )

  return gameStateChangedEvent
}

export function createMultiplierUpdatedEvent(
  player: Address,
  baseMultiplier: BigInt,
  stakingMultiplier: BigInt,
  nftMultiplier: BigInt,
  activityMultiplier: BigInt
): MultiplierUpdated {
  let multiplierUpdatedEvent = changetype<MultiplierUpdated>(newMockEvent())

  multiplierUpdatedEvent.parameters = new Array()

  multiplierUpdatedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  multiplierUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "baseMultiplier",
      ethereum.Value.fromUnsignedBigInt(baseMultiplier)
    )
  )
  multiplierUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingMultiplier",
      ethereum.Value.fromUnsignedBigInt(stakingMultiplier)
    )
  )
  multiplierUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftMultiplier",
      ethereum.Value.fromUnsignedBigInt(nftMultiplier)
    )
  )
  multiplierUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "activityMultiplier",
      ethereum.Value.fromUnsignedBigInt(activityMultiplier)
    )
  )

  return multiplierUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPlayerRankChangedEvent(
  player: Address,
  weekNumber: BigInt,
  newRank: BigInt,
  score: BigInt
): PlayerRankChanged {
  let playerRankChangedEvent = changetype<PlayerRankChanged>(newMockEvent())

  playerRankChangedEvent.parameters = new Array()

  playerRankChangedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  playerRankChangedEvent.parameters.push(
    new ethereum.EventParam(
      "weekNumber",
      ethereum.Value.fromUnsignedBigInt(weekNumber)
    )
  )
  playerRankChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newRank",
      ethereum.Value.fromUnsignedBigInt(newRank)
    )
  )
  playerRankChangedEvent.parameters.push(
    new ethereum.EventParam("score", ethereum.Value.fromUnsignedBigInt(score))
  )

  return playerRankChangedEvent
}

export function createPlayerScoreUpdatedEvent(
  player: Address,
  weekNumber: BigInt,
  newScore: BigInt,
  timestamp: BigInt
): PlayerScoreUpdated {
  let playerScoreUpdatedEvent = changetype<PlayerScoreUpdated>(newMockEvent())

  playerScoreUpdatedEvent.parameters = new Array()

  playerScoreUpdatedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  playerScoreUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "weekNumber",
      ethereum.Value.fromUnsignedBigInt(weekNumber)
    )
  )
  playerScoreUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newScore",
      ethereum.Value.fromUnsignedBigInt(newScore)
    )
  )
  playerScoreUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return playerScoreUpdatedEvent
}

export function createQuestCompletedEvent(
  player: Address,
  characterId: BigInt,
  reward: BigInt,
  timestamp: BigInt
): QuestCompleted {
  let questCompletedEvent = changetype<QuestCompleted>(newMockEvent())

  questCompletedEvent.parameters = new Array()

  questCompletedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  questCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "characterId",
      ethereum.Value.fromUnsignedBigInt(characterId)
    )
  )
  questCompletedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  questCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return questCompletedEvent
}

export function createQuestStartedEvent(
  player: Address,
  characterId: BigInt,
  timestamp: BigInt
): QuestStarted {
  let questStartedEvent = changetype<QuestStarted>(newMockEvent())

  questStartedEvent.parameters = new Array()

  questStartedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  questStartedEvent.parameters.push(
    new ethereum.EventParam(
      "characterId",
      ethereum.Value.fromUnsignedBigInt(characterId)
    )
  )
  questStartedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return questStartedEvent
}

export function createRewardPoolUpdatedEvent(
  newTotal: BigInt,
  added: BigInt,
  timestamp: BigInt
): RewardPoolUpdated {
  let rewardPoolUpdatedEvent = changetype<RewardPoolUpdated>(newMockEvent())

  rewardPoolUpdatedEvent.parameters = new Array()

  rewardPoolUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotal",
      ethereum.Value.fromUnsignedBigInt(newTotal)
    )
  )
  rewardPoolUpdatedEvent.parameters.push(
    new ethereum.EventParam("added", ethereum.Value.fromUnsignedBigInt(added))
  )
  rewardPoolUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return rewardPoolUpdatedEvent
}

export function createWeeklyRewardsDistributedEvent(
  weekNumber: BigInt,
  totalRewards: BigInt,
  winners: Array<Address>,
  amounts: Array<BigInt>
): WeeklyRewardsDistributed {
  let weeklyRewardsDistributedEvent = changetype<WeeklyRewardsDistributed>(
    newMockEvent()
  )

  weeklyRewardsDistributedEvent.parameters = new Array()

  weeklyRewardsDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "weekNumber",
      ethereum.Value.fromUnsignedBigInt(weekNumber)
    )
  )
  weeklyRewardsDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "totalRewards",
      ethereum.Value.fromUnsignedBigInt(totalRewards)
    )
  )
  weeklyRewardsDistributedEvent.parameters.push(
    new ethereum.EventParam("winners", ethereum.Value.fromAddressArray(winners))
  )
  weeklyRewardsDistributedEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )

  return weeklyRewardsDistributedEvent
}
