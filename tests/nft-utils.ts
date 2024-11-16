import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
  URI
} from "../generated/NFT/NFT"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createCharacterLevelUpEvent(
  player: Address,
  characterId: BigInt,
  newLevel: BigInt,
  timestamp: BigInt
): CharacterLevelUp {
  let characterLevelUpEvent = changetype<CharacterLevelUp>(newMockEvent())

  characterLevelUpEvent.parameters = new Array()

  characterLevelUpEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  characterLevelUpEvent.parameters.push(
    new ethereum.EventParam(
      "characterId",
      ethereum.Value.fromUnsignedBigInt(characterId)
    )
  )
  characterLevelUpEvent.parameters.push(
    new ethereum.EventParam(
      "newLevel",
      ethereum.Value.fromUnsignedBigInt(newLevel)
    )
  )
  characterLevelUpEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return characterLevelUpEvent
}

export function createCharacterLootBoxOpenedEvent(
  player: Address,
  characterType: i32,
  timestamp: BigInt
): CharacterLootBoxOpened {
  let characterLootBoxOpenedEvent = changetype<CharacterLootBoxOpened>(
    newMockEvent()
  )

  characterLootBoxOpenedEvent.parameters = new Array()

  characterLootBoxOpenedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  characterLootBoxOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "characterType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(characterType))
    )
  )
  characterLootBoxOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return characterLootBoxOpenedEvent
}

export function createCharacterMintedEvent(
  to: Address,
  characterId: BigInt,
  characterType: i32,
  timestamp: BigInt
): CharacterMinted {
  let characterMintedEvent = changetype<CharacterMinted>(newMockEvent())

  characterMintedEvent.parameters = new Array()

  characterMintedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  characterMintedEvent.parameters.push(
    new ethereum.EventParam(
      "characterId",
      ethereum.Value.fromUnsignedBigInt(characterId)
    )
  )
  characterMintedEvent.parameters.push(
    new ethereum.EventParam(
      "characterType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(characterType))
    )
  )
  characterMintedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return characterMintedEvent
}

export function createFeeCollectedEvent(
  amount: BigInt,
  gameSystem: Address,
  timestamp: BigInt
): FeeCollected {
  let feeCollectedEvent = changetype<FeeCollected>(newMockEvent())

  feeCollectedEvent.parameters = new Array()

  feeCollectedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  feeCollectedEvent.parameters.push(
    new ethereum.EventParam(
      "gameSystem",
      ethereum.Value.fromAddress(gameSystem)
    )
  )
  feeCollectedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return feeCollectedEvent
}

export function createGameSystemUpdatedEvent(
  newGameSystem: Address,
  timestamp: BigInt
): GameSystemUpdated {
  let gameSystemUpdatedEvent = changetype<GameSystemUpdated>(newMockEvent())

  gameSystemUpdatedEvent.parameters = new Array()

  gameSystemUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newGameSystem",
      ethereum.Value.fromAddress(newGameSystem)
    )
  )
  gameSystemUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return gameSystemUpdatedEvent
}

export function createItemEquippedEvent(
  player: Address,
  characterId: BigInt,
  itemId: BigInt,
  timestamp: BigInt
): ItemEquipped {
  let itemEquippedEvent = changetype<ItemEquipped>(newMockEvent())

  itemEquippedEvent.parameters = new Array()

  itemEquippedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  itemEquippedEvent.parameters.push(
    new ethereum.EventParam(
      "characterId",
      ethereum.Value.fromUnsignedBigInt(characterId)
    )
  )
  itemEquippedEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  itemEquippedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return itemEquippedEvent
}

export function createItemMintedEvent(
  to: Address,
  itemId: BigInt,
  amount: BigInt,
  timestamp: BigInt
): ItemMinted {
  let itemMintedEvent = changetype<ItemMinted>(newMockEvent())

  itemMintedEvent.parameters = new Array()

  itemMintedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  itemMintedEvent.parameters.push(
    new ethereum.EventParam("itemId", ethereum.Value.fromUnsignedBigInt(itemId))
  )
  itemMintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  itemMintedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return itemMintedEvent
}

export function createLootBoxOpenedEvent(
  player: Address,
  tokenId: BigInt,
  amount: BigInt,
  timestamp: BigInt
): LootBoxOpened {
  let lootBoxOpenedEvent = changetype<LootBoxOpened>(newMockEvent())

  lootBoxOpenedEvent.parameters = new Array()

  lootBoxOpenedEvent.parameters.push(
    new ethereum.EventParam("player", ethereum.Value.fromAddress(player))
  )
  lootBoxOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  lootBoxOpenedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  lootBoxOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return lootBoxOpenedEvent
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

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}
