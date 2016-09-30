/** The git errors which can be parsed from failed git commands. */
export enum GitError {
  GitNotFound,
  SSHKeyAuditUnverified,
  SSHAuthenticationFailed,
  SSHPermissionDenied,
  HTTPSAuthenticationFailed,
  RemoteDisconnection,
  HostDown,
  RebaseConflicts,
  MergeConflicts,
  HTTPSRepositoryNotFound,
  SSHRepositoryNotFound,
  PushNotFastForward,
  BranchDeletionFailed,
  DefaultBranchDeletionFailed,
  RevertConflicts,
  EmptyRebasePatch,
  NoMatchingRemoteBranch,
  NothingToCommit,
  NoSubmoduleMapping,
  SubmoduleRepositoryDoesNotExist,
  InvalidSubmoduleSHA,
  LocalPermissionDenied,
  InvalidMerge,
  InvalidRebase,
  NonFastForwardMergeIntoEmptyHead,
  PatchDoesNotApply,
  BranchAlreadyExists,
}

/** A mapping from regexes to the git error they identify. */
export const GitErrorRegexes = {
  "ERROR: ([\\s\\S]+?)\\n+\\[EPOLICYKEYAGE\\]\\n+fatal: Could not read from remote repository.": GitError.SSHKeyAuditUnverified,
  "fatal: Authentication failed": GitError.SSHAuthenticationFailed,
  "fatal: Could not read from remote repository.": GitError.SSHPermissionDenied,
  "The requested URL returned error: 403": GitError.HTTPSAuthenticationFailed,
  "fatal: The remote end hung up unexpectedly": GitError.RemoteDisconnection,
  "fatal: unable to access '(.+)': Failed to connect to (.+): Host is down": GitError.HostDown,
  "Failed to merge in the changes.": GitError.RebaseConflicts,
  "(Merge conflict|Automatic merge failed; fix conflicts and then commit the result)": GitError.MergeConflicts,
  "fatal: repository '(.+)' not found": GitError.HTTPSRepositoryNotFound,
  "ERROR: Repository not found": GitError.SSHRepositoryNotFound,
  "\\((non-fast-forward|fetch first)\\)\nerror: failed to push some refs to '.*'": GitError.PushNotFastForward,
  "error: unable to delete '(.+)': remote ref does not exist": GitError.BranchDeletionFailed,
  "\\[remote rejected\\] (.+) \\(deletion of the current branch prohibited\\)": GitError.DefaultBranchDeletionFailed,
  "error: could not revert .*\nhint: after resolving the conflicts, mark the corrected paths\nhint: with 'git add <paths>' or 'git rm <paths>'\nhint: and commit the result with 'git commit'": GitError.RevertConflicts,
  "Applying: .*\nNo changes - did you forget to use 'git add'\\?\nIf there is nothing left to stage, chances are that something else\n.*": GitError.EmptyRebasePatch,
  "There are no candidates for (rebasing|merging) among the refs that you just fetched.\nGenerally this means that you provided a wildcard refspec which had no\nmatches on the remote end.": GitError.NoMatchingRemoteBranch,
  "nothing to commit": GitError.NothingToCommit,
  "No submodule mapping found in .gitmodules for path '(.+)'": GitError.NoSubmoduleMapping,
  "fatal: repository '(.+)' does not exist\nfatal: clone of '.+' into submodule path '(.+)' failed": GitError.SubmoduleRepositoryDoesNotExist,
  "Fetched in submodule path '(.+)', but it did not contain (.+). Direct fetching of that commit failed.": GitError.InvalidSubmoduleSHA,
  "fatal: could not create work tree dir '(.+)'.*: Permission denied": GitError.LocalPermissionDenied,
  "merge: (.+) - not something we can merge": GitError.InvalidMerge,
  "invalid upstream (.+)": GitError.InvalidRebase,
  "fatal: Non-fast-forward commit does not make sense into an empty head": GitError.NonFastForwardMergeIntoEmptyHead,
  "error: (.+): (patch does not apply|already exists in working directory)": GitError.PatchDoesNotApply,
  "fatal: A branch named '(.+)' already exists.": GitError.BranchAlreadyExists,
}

/** The exit code when git can't be found. */
export const GitNotFoundExitCode = 128