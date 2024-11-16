import {
  BattleCompleted as BattleCompletedEvent,
  BattleStarted as BattleStartedEvent,
  ForceDistributionExecuted as ForceDistributionExecutedEvent,
  GameInitialized as GameInitializedEvent,
  GameServerChanged as GameServerChangedEvent,
  GameStateChanged as GameStateChangedEvent,
  MultiplierUpdated as MultiplierUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PlayerRankChanged as PlayerRankChangedEvent,
  PlayerScoreUpdated as PlayerScoreUpdatedEvent,
  QuestCompleted as QuestCompletedEvent,
  QuestStarted as QuestStartedEvent,
  RewardPoolUpdated as RewardPoolUpdatedEvent,
  WeeklyRewardsDistributed as WeeklyRewardsDistributedEvent,
} from "../generated/GameSystem/GameSystem"
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
  WeeklyRewardsDistributed,
} from "../generated/schema"
import {Value} from "@graphprotocol/graph-ts";

export function handleBattleCompleted(event: BattleCompletedEvent): void {
  let entity = new BattleCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.battleId = event.params.battleId
  entity.player = event.params.player
  entity.characterId = event.params.characterId
  entity.victory = event.params.victory
  entity.rewardAmount = event.params.rewardAmount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBattleStarted(event: BattleStartedEvent): void {
  let entity = new BattleStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.battleId = event.params.battleId
  entity.player = event.params.player
  entity.characterId = event.params.characterId
  entity.enemyId = event.params.enemyId
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleForceDistributionExecuted(
  event: ForceDistributionExecutedEvent,
): void {
  let entity = new ForceDistributionExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.weekNumber = event.params.weekNumber
  entity.triggeredBy = event.params.triggeredBy
  entity.totalDistributed = event.params.totalDistributed
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGameInitialized(event: GameInitializedEvent): void {
  let entity = new GameInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.realmToken = event.params.realmToken
  entity.nftContract = event.params.nftContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGameServerChanged(event: GameServerChangedEvent): void {
  let entity = new GameServerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newServer = event.params.newServer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGameStateChanged(event: GameStateChangedEvent): void {
  let entity = new GameStateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.isPaused = event.params.isPaused

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMultiplierUpdated(event: MultiplierUpdatedEvent): void {
  let entity = new MultiplierUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.player = event.params.player
  entity.baseMultiplier = event.params.baseMultiplier
  entity.stakingMultiplier = event.params.stakingMultiplier
  entity.nftMultiplier = event.params.nftMultiplier
  entity.activityMultiplier = event.params.activityMultiplier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePlayerRankChanged(event: PlayerRankChangedEvent): void {
  let entity = new PlayerRankChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.player = event.params.player
  entity.weekNumber = event.params.weekNumber
  entity.newRank = event.params.newRank
  entity.score = event.params.score

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePlayerScoreUpdated(event: PlayerScoreUpdatedEvent): void {
  let entity = new PlayerScoreUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.player = event.params.player
  entity.weekNumber = event.params.weekNumber
  entity.newScore = event.params.newScore
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuestCompleted(event: QuestCompletedEvent): void {
  let entity = new QuestCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.player = event.params.player
  entity.characterId = event.params.characterId
  entity.reward = event.params.reward
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuestStarted(event: QuestStartedEvent): void {
  let entity = new QuestStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.player = event.params.player
  entity.characterId = event.params.characterId
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardPoolUpdated(event: RewardPoolUpdatedEvent): void {
  let entity = new RewardPoolUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newTotal = event.params.newTotal
  entity.added = event.params.added
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWeeklyRewardsDistributed(
  event: WeeklyRewardsDistributedEvent,
): void {
  let entity = new WeeklyRewardsDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )

  entity.weekNumber = event.params.weekNumber
  entity.totalRewards = event.params.totalRewards
  // entity.winners = event.params.winners
  entity.winners = Value.fromAddressArray(event.params.winners).toBytesArray();
  entity.amounts = event.params.amounts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
