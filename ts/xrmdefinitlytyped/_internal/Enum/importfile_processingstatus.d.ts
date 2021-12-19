declare const enum importfile_processingstatus {
  NotStarted = 1,
  Parsing = 2,
  ParsingComplete = 3,
  ComplexTransformation = 4,
  LookupTransformation = 5,
  PicklistTransformation = 6,
  OwnerTransformation = 7,
  TransformationComplete = 8,
  ImportPass1 = 9,
  ImportPass2 = 10,
  ImportComplete = 11,
  PrimaryKeyTransformation = 12,
}
