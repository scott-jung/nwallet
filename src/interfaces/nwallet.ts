import { Asset } from 'stellar-sdk';
export namespace NWallet {
    export const AccountEmpty: Account = {
        isActivate: false,
        signature: NWallet.SignatureEmpty,
        address: NWallet.AddressEmpty,
        profile: NWallet.ProfileEmpty,
        wallets: NWallet.WalletEmpty,
    };
    export const SignatureEmpty: Signature = { public :'public key', secret : 'secret sig' };
    export const WalletEmpty: WalletItem[] = [{ asset: Asset.native(), amount: '0' }];
    export const AddressEmpty: Address = { location: 'empty address' };
    export const ProfileEmpty: Profile = { firstName: 'john', lastName : 'doe', phoneNumber : { countryCode : '00', number: '000000' } };
    export const TransactionEmpty: Transaction[] = [{ type : "", item: { amount : "", asset : Asset.native() }, date : new Date()}]

    export interface Account {
        isActivate: boolean;
        signature: Signature;
        address: Address;
        profile: Profile;
        wallets: WalletItem[];
    }

    export interface Address {
        location: string;
    }

    export interface Profile {
        firstName: string;
        middleName?: string;
        lastName: string;
        phoneNumber: { countryCode: string; number: string };
    }

    export interface Signature {
        public: string;
        secret: string;
    }

    export interface WalletItem {
        asset: Asset;
        amount: string;
    }

    export interface Transaction {
        type: string;
        item: WalletItem;
        date: Date;
    }
}
