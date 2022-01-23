import { Vpc } from "@pulumi/aws/ec2";
import * as awsx from "@pulumi/awsx";
import * as eks from "@pulumi/eks";
import * as pulumi from "@pulumi/pulumi"

const env = pulumi.getStack()
const vpc = new pulumi.StackReference(`devbydev/vpc/${env}`)
const vpcId = vpc.getOutput('vpcId')

const privateSubnetIds = vpc.getOutput(
  'vpcPrivateSubnetIds'
) as pulumi.OutputInstance<string[]>

// Create an EKS cluster inside of the VPC.
const cluster = new eks.Cluster("pisces", {
    // Default Node Group
    instanceType: "t3.large",
    desiredCapacity: 3,
    minSize: 2,
    maxSize: 5,
    // Networking, 
    vpcId: vpcId,
    privateSubnetIds,
    nodeAssociatePublicIpAddress: false,
});


// Export the cluster's kubeconfig.
export const kubeconfig = cluster.kubeconfig;
