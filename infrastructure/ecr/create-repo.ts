import * as aws from "@pulumi/aws";


export const createRepo = (name: string) => {
    const repo = new aws.ecr.Repository(name, {
        name,
    });
    return repo
}
