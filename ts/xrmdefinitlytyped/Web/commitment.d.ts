interface Commitment_Base extends WebEntity {
  activityid?: string | null;
  activitytypecode?: string | null;
  commitmentid?: string | null;
  effort?: number | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  participationtypemask?: number | null;
  partyid?: string | null;
  resourcespecid?: string | null;
  scheduledend?: Date | null;
  scheduledstart?: Date | null;
  statecode?: commitment_statecode | null;
  statuscode?: commitment_statuscode | null;
  subject?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Commitment_Relationships {
  Commitment_Annotation?: Annotation_Result[] | null;
  commitment_AsyncOperations?: AsyncOperation_Result[] | null;
  commitment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  commitment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  commitment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  commitment_SyncErrors?: SyncError_Result[] | null;
  userentityinstancedata_commitment?: UserEntityInstanceData_Result[] | null;
}
interface Commitment extends Commitment_Base, Commitment_Relationships {
}
interface Commitment_Create extends Commitment {
}
interface Commitment_Update extends Commitment {
}
interface Commitment_Select {
  activityid: WebAttribute<Commitment_Select, { activityid: string | null }, {  }>;
  activitytypecode: WebAttribute<Commitment_Select, { activitytypecode: string | null }, {  }>;
  commitmentid: WebAttribute<Commitment_Select, { commitmentid: string | null }, {  }>;
  effort: WebAttribute<Commitment_Select, { effort: number | null }, {  }>;
  importsequencenumber: WebAttribute<Commitment_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<Commitment_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Commitment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  participationtypemask: WebAttribute<Commitment_Select, { participationtypemask: number | null }, {  }>;
  partyid: WebAttribute<Commitment_Select, { partyid: string | null }, {  }>;
  resourcespecid: WebAttribute<Commitment_Select, { resourcespecid: string | null }, {  }>;
  scheduledend: WebAttribute<Commitment_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
  scheduledstart: WebAttribute<Commitment_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
  serviceid_guid: WebAttribute<Commitment_Select, { serviceid_guid: string | null }, { serviceid_formatted?: string }>;
  statecode: WebAttribute<Commitment_Select, { statecode: commitment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Commitment_Select, { statuscode: commitment_statuscode | null }, { statuscode_formatted?: string }>;
  subject: WebAttribute<Commitment_Select, { subject: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Commitment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Commitment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Commitment_Select, { versionnumber: number | null }, {  }>;
}
interface Commitment_Filter {
  activityid: XQW.Guid;
  activitytypecode: string;
  commitmentid: XQW.Guid;
  effort: number;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  participationtypemask: number;
  partyid: XQW.Guid;
  resourcespecid: XQW.Guid;
  scheduledend: Date;
  scheduledstart: Date;
  serviceid_guid: XQW.Guid;
  statecode: commitment_statecode;
  statuscode: commitment_statuscode;
  subject: string;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Commitment_Expand {
  Commitment_Annotation: WebExpand<Commitment_Expand, Annotation_Select, Annotation_Filter, { Commitment_Annotation: Annotation_Result[] }>;
  commitment_AsyncOperations: WebExpand<Commitment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { commitment_AsyncOperations: AsyncOperation_Result[] }>;
  commitment_BulkDeleteFailures: WebExpand<Commitment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { commitment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  commitment_MailboxTrackingFolders: WebExpand<Commitment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { commitment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  commitment_PrincipalObjectAttributeAccesses: WebExpand<Commitment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { commitment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  commitment_SyncErrors: WebExpand<Commitment_Expand, SyncError_Select, SyncError_Filter, { commitment_SyncErrors: SyncError_Result[] }>;
  userentityinstancedata_commitment: WebExpand<Commitment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_commitment: UserEntityInstanceData_Result[] }>;
}
interface Commitment_FormattedResult {
  overriddencreatedon_formatted?: string;
  scheduledend_formatted?: string;
  scheduledstart_formatted?: string;
  serviceid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface Commitment_Result extends Commitment_Base, Commitment_Relationships {
  "@odata.etag": string;
  serviceid_guid: string | null;
}
interface Commitment_RelatedOne {
}
interface Commitment_RelatedMany {
  Commitment_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  commitment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  commitment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  commitment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  commitment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  commitment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_commitment: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  commitments: WebMappingRetrieve<Commitment_Select,Commitment_Expand,Commitment_Filter,Commitment_Fixed,Commitment_Result,Commitment_FormattedResult>;
}
interface WebEntitiesRelated {
  commitments: WebMappingRelated<Commitment_RelatedOne,Commitment_RelatedMany>;
}
interface WebEntitiesCUDA {
  commitments: WebMappingCUDA<Commitment_Create,Commitment_Update,Commitment_Select>;
}
