import {
  ApprovalForAll as ApprovalForAllEvent,
  CharacterLevelUp as CharacterLevelUpEvent,
  CharacterLootBoxOpened as CharacterLootBoxOpenedEvent,
  CharacterMinted as CharacterMintedEvent,
  FeeCollected as FeeCollectedEvent,
  GameSystemUpdated as GameSystemUpdatedEvent,
  ItemEquipped as ItemEquippedEvent,
  ItemMinted as ItemMintedEvent,
  LootBoxOpened as LootBoxOpenedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
} from "../generated/NFT/NFT"
import {
  ApprovalForAll,
  CharacterLevelUp,
  CharacterLootBoxOpened,
  CharacterMinted,
  FeeCollected,
  GameSystemUpdated,
  ItemEquipped,
  ItemMinted,
  LootBoxOpened,
  OwnershipTransferred,
  TransferBatch,
  TransferSingle,
  URI,
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCharacterLevelUp(event: CharacterLevelUpEvent): void {
  let entity = new CharacterLevelUp(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.player = event.params.player
  entity.characterId = event.params.characterId
  entity.newLevel = event.params.newLevel
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCharacterLootBoxOpened(
  event: CharacterLootBoxOpenedEvent,
): void {
  let entity = new CharacterLootBoxOpened(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.player = event.params.player
  entity.characterType = event.params.characterType
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCharacterMinted(event: CharacterMintedEvent): void {
  let entity = new CharacterMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.to = event.params.to
  entity.characterId = event.params.characterId
  entity.characterType = event.params.characterType
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeCollected(event: FeeCollectedEvent): void {
  let entity = new FeeCollected(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.amount = event.params.amount
  entity.gameSystem = event.params.gameSystem
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGameSystemUpdated(event: GameSystemUpdatedEvent): void {
  let entity = new GameSystemUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newGameSystem = event.params.newGameSystem
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemEquipped(event: ItemEquippedEvent): void {
  let entity = new ItemEquipped(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.player = event.params.player
  entity.characterId = event.params.characterId
  entity.itemId = event.params.itemId
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemMinted(event: ItemMintedEvent): void {
  let entity = new ItemMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.to = event.params.to
  entity.itemId = event.params.itemId
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLootBoxOpened(event: LootBoxOpenedEvent): void {
  let entity = new LootBoxOpened(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.player = event.params.player
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

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

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.NFT_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.NFT_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
