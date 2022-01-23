import { createRepo } from './create-repo'
// Create a repository.
const hollaexServerRepo = createRepo('hollaex-server')
const hollaexWebRepo = createRepo('hollaex-web')
// And publish its URL, so we can push to it if we'd like.
export const hollaexServerRepoUrl = hollaexServerRepo.repositoryUrl;
export const hollaexWebRepoUrl = hollaexWebRepo.repositoryUrl;

