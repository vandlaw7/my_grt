import { BigInt } from '@graphprotocol/graph-ts'
import {
  Contract,
  AdminFeeUpdated,
  Approval,
  ApprovalForAll,
  LoanLiquidated,
  LoanRepaid,
  LoanStarted,
  OwnershipTransferred,
  Paused,
  PauserAdded,
  PauserRemoved,
  Transfer,
  Unpaused,
} from '../generated/Contract/Contract'
import { ExampleEntity } from '../generated/schema'

export function handleAdminFeeUpdated(event: AdminFeeUpdated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.newAdminFee = event.params.newAdminFee

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.adminFeeInBasisPoints(...)
  // - contract.balanceOf(...)
  // - contract.erc20CurrencyIsWhitelisted(...)
  // - contract.getApproved(...)
  // - contract.getChainID(...)
  // - contract.getPayoffAmount(...)
  // - contract.getWhetherNonceHasBeenUsedForUser(...)
  // - contract.isApprovedForAll(...)
  // - contract.isOwner(...)
  // - contract.isPauser(...)
  // - contract.isValidBorrowerSignature(...)
  // - contract.isValidLenderSignature(...)
  // - contract.loanIdToLoan(...)
  // - contract.loanRepaidOrLiquidated(...)
  // - contract.maximumLoanDuration(...)
  // - contract.maximumNumberOfActiveLoans(...)
  // - contract.name(...)
  // - contract.nftContractIsWhitelisted(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.paused(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.totalActiveLoans(...)
  // - contract.totalNumLoans(...)
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleLoanLiquidated(event: LoanLiquidated): void {}

export function handleLoanRepaid(event: LoanRepaid): void {}

export function handleLoanStarted(event: LoanStarted): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handlePauserAdded(event: PauserAdded): void {}

export function handlePauserRemoved(event: PauserRemoved): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnpaused(event: Unpaused): void {}

export class WhitelistNFTContractCall extends ethereum.Call {
  get inputs(): WhitelistNFTContractCall__Inputs {
    return new WhitelistNFTContractCall__Inputs(this)
  }

  get outputs(): WhitelistNFTContractCall__Outputs {
    return new WhitelistNFTContractCall__Outputs(this)
  }
}
