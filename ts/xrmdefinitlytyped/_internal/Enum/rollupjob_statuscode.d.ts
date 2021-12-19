declare const enum rollupjob_statuscode {
  WaitingForResources = 0,
  Waiting = 10,
  InProgress = 20,
  Pausing = 21,
  Canceling = 22,
  Succeeded = 30,
  Failed = 31,
  Canceled = 32,
}
