interface msdyn_salesroutingrun_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_salesroutingrunid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_salesroutingrun_statecode | null;
  statuscode?: msdyn_salesroutingrun_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_salesroutingrun_Relationships {
  msdyn_ownerassigned_systemuser?: SystemUser_Result | null;
  msdyn_ownerassigned_team?: Team_Result | null;
  msdyn_salesroutingrun_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_salesroutingrun_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_salesroutingrun_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_salesroutingrun_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_salesroutingrun_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_salesroutingrun_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_salesroutingrun_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_salesroutingrun_SyncErrors?: SyncError_Result[] | null;
  msdyn_salesroutingrun_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_targetobject_lead?: Lead_Result | null;
  msdyn_targetobject_opportunity?: Opportunity_Result | null;
}
interface msdyn_salesroutingrun extends msdyn_salesroutingrun_Base, msdyn_salesroutingrun_Relationships {
  msdyn_assignmentruleid_bind$msdyn_assignmentrules?: string | null;
  msdyn_ownerassigned_systemuser_bind$systemusers?: string | null;
  msdyn_ownerassigned_team_bind$teams?: string | null;
  msdyn_segmentid_bind$msdyn_segments?: string | null;
  msdyn_targetobject_lead_bind$leads?: string | null;
  msdyn_targetobject_opportunity_bind$opportunities?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_salesroutingrun_Create extends msdyn_salesroutingrun {
}
interface msdyn_salesroutingrun_Update extends msdyn_salesroutingrun {
}
interface msdyn_salesroutingrun_Select {
  createdby_guid: WebAttribute<msdyn_salesroutingrun_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_salesroutingrun_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_salesroutingrun_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_salesroutingrun_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_salesroutingrun_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_salesroutingrun_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_salesroutingrun_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_assignmentruleid_guid: WebAttribute<msdyn_salesroutingrun_Select, { msdyn_assignmentruleid_guid: string | null }, { msdyn_assignmentruleid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_salesroutingrun_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ownerassigned_guid: WebAttribute<msdyn_salesroutingrun_Select, { msdyn_ownerassigned_guid: string | null }, { msdyn_ownerassigned_formatted?: string }>;
  msdyn_salesroutingrunid: WebAttribute<msdyn_salesroutingrun_Select, { msdyn_salesroutingrunid: string | null }, {  }>;
  msdyn_segmentid_guid: WebAttribute<msdyn_salesroutingrun_Select, { msdyn_segmentid_guid: string | null }, { msdyn_segmentid_formatted?: string }>;
  msdyn_targetobject_guid: WebAttribute<msdyn_salesroutingrun_Select, { msdyn_targetobject_guid: string | null }, { msdyn_targetobject_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_salesroutingrun_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_salesroutingrun_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_salesroutingrun_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_salesroutingrun_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_salesroutingrun_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_salesroutingrun_Select, { statecode: msdyn_salesroutingrun_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_salesroutingrun_Select, { statuscode: msdyn_salesroutingrun_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_salesroutingrun_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_salesroutingrun_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_salesroutingrun_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_salesroutingrun_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_assignmentruleid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ownerassigned_guid: XQW.Guid;
  msdyn_salesroutingrunid: XQW.Guid;
  msdyn_segmentid_guid: XQW.Guid;
  msdyn_targetobject_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_salesroutingrun_statecode;
  statuscode: msdyn_salesroutingrun_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_salesroutingrun_Expand {
  createdby: WebExpand<msdyn_salesroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_salesroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_salesroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_salesroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_assignmentruleid: WebExpand<msdyn_salesroutingrun_Expand, msdyn_assignmentrule_Select, msdyn_assignmentrule_Filter, { msdyn_assignmentruleid: msdyn_assignmentrule_Result }>;
  msdyn_ownerassigned_systemuser: WebExpand<msdyn_salesroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_ownerassigned_systemuser: SystemUser_Result }>;
  msdyn_ownerassigned_team: WebExpand<msdyn_salesroutingrun_Expand, Team_Select, Team_Filter, { msdyn_ownerassigned_team: Team_Result }>;
  msdyn_salesroutingrun_AsyncOperations: WebExpand<msdyn_salesroutingrun_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_salesroutingrun_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_salesroutingrun_BulkDeleteFailures: WebExpand<msdyn_salesroutingrun_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_salesroutingrun_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_salesroutingrun_DuplicateBaseRecord: WebExpand<msdyn_salesroutingrun_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_salesroutingrun_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_salesroutingrun_DuplicateMatchingRecord: WebExpand<msdyn_salesroutingrun_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_salesroutingrun_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_salesroutingrun_MailboxTrackingFolders: WebExpand<msdyn_salesroutingrun_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_salesroutingrun_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_salesroutingrun_PrincipalObjectAttributeAccesses: WebExpand<msdyn_salesroutingrun_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_salesroutingrun_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_salesroutingrun_ProcessSession: WebExpand<msdyn_salesroutingrun_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_salesroutingrun_ProcessSession: ProcessSession_Result[] }>;
  msdyn_salesroutingrun_SyncErrors: WebExpand<msdyn_salesroutingrun_Expand, SyncError_Select, SyncError_Filter, { msdyn_salesroutingrun_SyncErrors: SyncError_Result[] }>;
  msdyn_salesroutingrun_UserEntityInstanceDatas: WebExpand<msdyn_salesroutingrun_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_salesroutingrun_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_segmentid: WebExpand<msdyn_salesroutingrun_Expand, msdyn_segment_Select, msdyn_segment_Filter, { msdyn_segmentid: msdyn_segment_Result }>;
  msdyn_targetobject_lead: WebExpand<msdyn_salesroutingrun_Expand, Lead_Select, Lead_Filter, { msdyn_targetobject_lead: Lead_Result }>;
  msdyn_targetobject_opportunity: WebExpand<msdyn_salesroutingrun_Expand, Opportunity_Select, Opportunity_Filter, { msdyn_targetobject_opportunity: Opportunity_Result }>;
  ownerid: WebExpand<msdyn_salesroutingrun_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_salesroutingrun_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_salesroutingrun_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_salesroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_salesroutingrun_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_assignmentruleid_formatted?: string;
  msdyn_ownerassigned_formatted?: string;
  msdyn_segmentid_formatted?: string;
  msdyn_targetobject_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_salesroutingrun_Result extends msdyn_salesroutingrun_Base, msdyn_salesroutingrun_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_assignmentruleid_guid: string | null;
  msdyn_ownerassigned_guid: string | null;
  msdyn_segmentid_guid: string | null;
  msdyn_targetobject_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_salesroutingrun_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_assignmentruleid: WebMappingRetrieve<msdyn_assignmentrule_Select,msdyn_assignmentrule_Expand,msdyn_assignmentrule_Filter,msdyn_assignmentrule_Fixed,msdyn_assignmentrule_Result,msdyn_assignmentrule_FormattedResult>;
  msdyn_ownerassigned_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ownerassigned_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  msdyn_segmentid: WebMappingRetrieve<msdyn_segment_Select,msdyn_segment_Expand,msdyn_segment_Filter,msdyn_segment_Fixed,msdyn_segment_Result,msdyn_segment_FormattedResult>;
  msdyn_targetobject_lead: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  msdyn_targetobject_opportunity: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_salesroutingrun_RelatedMany {
  msdyn_salesroutingrun_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_salesroutingrun_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_salesroutingrun_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_salesroutingrun_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_salesroutingrun_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_salesroutingrun_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_salesroutingrun_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_salesroutingrun_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_salesroutingrun_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_salesroutingruns: WebMappingRetrieve<msdyn_salesroutingrun_Select,msdyn_salesroutingrun_Expand,msdyn_salesroutingrun_Filter,msdyn_salesroutingrun_Fixed,msdyn_salesroutingrun_Result,msdyn_salesroutingrun_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_salesroutingruns: WebMappingRelated<msdyn_salesroutingrun_RelatedOne,msdyn_salesroutingrun_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_salesroutingruns: WebMappingCUDA<msdyn_salesroutingrun_Create,msdyn_salesroutingrun_Update,msdyn_salesroutingrun_Select>;
}
