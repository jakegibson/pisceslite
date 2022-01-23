import * as awsx from "@pulumi/awsx";

// Allocate a new VPC with a smaller CIDR range:
const vpc = new awsx.ec2.Vpc("custom", {
    cidrBlock: "10.80.0.0/16",
    numberOfAvailabilityZones: "all",
});

// Export a few resulting fields to make them easy to use:
export const vpcId= vpc.id;
export const vpcPrivateSubnetIds = vpc.privateSubnetIds;
export const vpcPublicSubnetIds = vpc.publicSubnetIds;
