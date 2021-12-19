interface ChildIncidentCount_Base extends WebEntity {
  childincidentcountid?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  numberofchildincidents?: string | null;
  overriddencreatedon?: Date | null;
  parentcaseid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ChildIncidentCount_Relationships {
  childincidentcount_AsyncOperations?: AsyncOperation_Result[] | null;
  childincidentcount_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  childincidentcount_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  childincidentcount_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  childincidentcount_SyncErrors?: SyncError_Result[] | null;
  childincidentcount_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  lk_incident_ChildIncidentCount?: Incident_Result[] | null;
}
interface ChildIncidentCount extends ChildIncidentCount_Base, ChildIncidentCount_Relationships {
}
interface ChildIncidentCount_Create extends ChildIncidentCount {
}
interface ChildIncidentCount_Update extends ChildIncidentCount {
}
interface ChildIncidentCount_Select {
  childincidentcountid: WebAttribute<ChildIncidentCount_Select, { childincidentcountid: string | null }, {  }>;
  importsequencenumber: WebAttribute<ChildIncidentCount_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<ChildIncidentCount_Select, { name: string | null }, {  }>;
  numberofchildincidents: WebAttribute<ChildIncidentCount_Select, { numberofchildincidents: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ChildIncidentCount_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  parentcaseid: WebAttribute<ChildIncidentCount_Select, { parentcaseid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ChildIncidentCount_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ChildIncidentCount_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ChildIncidentCount_Select, { versionnumber: number | null }, {  }>;
}
interface ChildIncidentCount_Filter {
  childincidentcountid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  numberofchildincidents: string;
  overriddencreatedon: Date;
  parentcaseid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ChildIncidentCount_Expand {
  childincidentcount_AsyncOperations: WebExpand<ChildIncidentCount_Expand, AsyncOperation_Select, AsyncOperation_Filter, { childincidentcount_AsyncOperations: AsyncOperation_Result[] }>;
  childincidentcount_BulkDeleteFailures: WebExpand<ChildIncidentCount_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { childincidentcount_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  childincidentcount_MailboxTrackingFolders: WebExpand<ChildIncidentCount_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { childincidentcount_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  childincidentcount_PrincipalObjectAttributeAccesses: WebExpand<ChildIncidentCount_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { childincidentcount_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  childincidentcount_SyncErrors: WebExpand<ChildIncidentCount_Expand, SyncError_Select, SyncError_Filter, { childincidentcount_SyncErrors: SyncError_Result[] }>;
  childincidentcount_UserEntityInstanceDatas: WebExpand<ChildIncidentCount_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { childincidentcount_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  lk_incident_ChildIncidentCount: WebExpand<ChildIncidentCount_Expand, Incident_Select, Incident_Filter, { lk_incident_ChildIncidentCount: Incident_Result[] }>;
}
interface ChildIncidentCount_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface ChildIncidentCount_Result extends ChildIncidentCount_Base, ChildIncidentCount_Relationships {
  "@odata.etag": string;
}
interface ChildIncidentCount_RelatedOne {
}
interface ChildIncidentCount_RelatedMany {
  childincidentcount_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  childincidentcount_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  childincidentcount_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  childincidentcount_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  childincidentcount_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  childincidentcount_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  lk_incident_ChildIncidentCount: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
}
interface WebEntitiesRetrieve {
  childincidentcounts: WebMappingRetrieve<ChildIncidentCount_Select,ChildIncidentCount_Expand,ChildIncidentCount_Filter,ChildIncidentCount_Fixed,ChildIncidentCount_Result,ChildIncidentCount_FormattedResult>;
}
interface WebEntitiesRelated {
  childincidentcounts: WebMappingRelated<ChildIncidentCount_RelatedOne,ChildIncidentCount_RelatedMany>;
}
interface WebEntitiesCUDA {
  childincidentcounts: WebMappingCUDA<ChildIncidentCount_Create,ChildIncidentCount_Update,ChildIncidentCount_Select>;
}
