export declare const FACTORY_ADDRESS = "0x0560336F7C95c497c7f27b1205aE86d3599eD6Fa";
export declare const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export declare const POOL_INIT_CODE_HASH = "0x2f04cf2e15aa7b76604c785aa118b205aa0bdc47d9623a6f2ec2945a94335817";
export declare const POOL_INIT_CODE_HASH_OPTIMISM = "0x0c231002d0970d2126e7e00ce88c3b0e5ec8e48dac71478d56245c34ea2f9447";
export declare const POOL_INIT_CODE_HASH_OPTIMISM_KOVAN = "0x1fc830513acbdb1608b8c18fd3cf4a4bee3329c69bb41d56400401c40fe02fd0";
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum FeeAmount {
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const TICK_SPACINGS: {
    [amount in FeeAmount]: number;
};
