interface msdyn_playbookactivityattribute_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_attributeLogicalName?: string | null;
  msdyn_attributeType?: msdyn_playbookactivityattributetype_optionset | null;
  msdyn_attributeValue?: string | null;
  msdyn_playbookactivityattributeid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_playbookactivityattribute_statecode | null;
  statuscode?: msdyn_playbookactivityattribute_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_playbookactivityattribute_Relationships {
  msdyn_playbookactivityattribute_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_playbookactivityattribute_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_playbookactivityattribute_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_playbookactivityattribute_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_playbookactivityattribute_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_playbookactivityattribute_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_playbookactivityattribute_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_playbookactivityattribute_SyncErrors?: SyncError_Result[] | null;
  msdyn_playbookactivityattribute_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_playbookactivityattribute extends msdyn_playbookactivityattribute_Base, msdyn_playbookactivityattribute_Relationships {
  msdyn_playbookactivityid_bind$msdyn_playbookactivities?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_playbookactivityattribute_Create extends msdyn_playbookactivityattribute {
}
interface msdyn_playbookactivityattribute_Update extends msdyn_playbookactivityattribute {
}
interface msdyn_playbookactivityattribute_Select {
  createdby_guid: WebAttribute<msdyn_playbookactivityattribute_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_playbookactivityattribute_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_playbookactivityattribute_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_playbookactivityattribute_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_playbookactivityattribute_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_playbookactivityattribute_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_playbookactivityattribute_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_attributeLogicalName: WebAttribute<msdyn_playbookactivityattribute_Select, { msdyn_attributeLogicalName: string | null }, {  }>;
  msdyn_attributeType: WebAttribute<msdyn_playbookactivityattribute_Select, { msdyn_attributeType: msdyn_playbookactivityattributetype_optionset | null }, { msdyn_attributeType_formatted?: string }>;
  msdyn_attributeValue: WebAttribute<msdyn_playbookactivityattribute_Select, { msdyn_attributeValue: string | null }, {  }>;
  msdyn_playbookactivityattributeid: WebAttribute<msdyn_playbookactivityattribute_Select, { msdyn_playbookactivityattributeid: string | null }, {  }>;
  msdyn_playbookactivityid_guid: WebAttribute<msdyn_playbookactivityattribute_Select, { msdyn_playbookactivityid_guid: string | null }, { msdyn_playbookactivityid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_playbookactivityattribute_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_playbookactivityattribute_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_playbookactivityattribute_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_playbookactivityattribute_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_playbookactivityattribute_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_playbookactivityattribute_Select, { statecode: msdyn_playbookactivityattribute_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_playbookactivityattribute_Select, { statuscode: msdyn_playbookactivityattribute_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_playbookactivityattribute_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_playbookactivityattribute_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_playbookactivityattribute_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_playbookactivityattribute_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_attributeLogicalName: string;
  msdyn_attributeType: msdyn_playbookactivityattributetype_optionset;
  msdyn_attributeValue: string;
  msdyn_playbookactivityattributeid: XQW.Guid;
  msdyn_playbookactivityid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_playbookactivityattribute_statecode;
  statuscode: msdyn_playbookactivityattribute_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_playbookactivityattribute_Expand {
  createdby: WebExpand<msdyn_playbookactivityattribute_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_playbookactivityattribute_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_playbookactivityattribute_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_playbookactivityattribute_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_playbookactivityattribute_AsyncOperations: WebExpand<msdyn_playbookactivityattribute_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_playbookactivityattribute_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_playbookactivityattribute_BulkDeleteFailures: WebExpand<msdyn_playbookactivityattribute_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_playbookactivityattribute_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_playbookactivityattribute_DuplicateBaseRecord: WebExpand<msdyn_playbookactivityattribute_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_playbookactivityattribute_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_playbookactivityattribute_DuplicateMatchingRecord: WebExpand<msdyn_playbookactivityattribute_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_playbookactivityattribute_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_playbookactivityattribute_MailboxTrackingFolders: WebExpand<msdyn_playbookactivityattribute_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_playbookactivityattribute_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_playbookactivityattribute_PrincipalObjectAttributeAccesses: WebExpand<msdyn_playbookactivityattribute_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_playbookactivityattribute_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_playbookactivityattribute_ProcessSession: WebExpand<msdyn_playbookactivityattribute_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_playbookactivityattribute_ProcessSession: ProcessSession_Result[] }>;
  msdyn_playbookactivityattribute_SyncErrors: WebExpand<msdyn_playbookactivityattribute_Expand, SyncError_Select, SyncError_Filter, { msdyn_playbookactivityattribute_SyncErrors: SyncError_Result[] }>;
  msdyn_playbookactivityattribute_UserEntityInstanceDatas: WebExpand<msdyn_playbookactivityattribute_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_playbookactivityattribute_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_playbookactivityid: WebExpand<msdyn_playbookactivityattribute_Expand, msdyn_playbookactivity_Select, msdyn_playbookactivity_Filter, { msdyn_playbookactivityid: msdyn_playbookactivity_Result }>;
  ownerid: WebExpand<msdyn_playbookactivityattribute_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_playbookactivityattribute_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_playbookactivityattribute_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_playbookactivityattribute_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_playbookactivityattribute_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_attributeType_formatted?: string;
  msdyn_playbookactivityid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_playbookactivityattribute_Result extends msdyn_playbookactivityattribute_Base, msdyn_playbookactivityattribute_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_playbookactivityid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_playbookactivityattribute_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_playbookactivityid: WebMappingRetrieve<msdyn_playbookactivity_Select,msdyn_playbookactivity_Expand,msdyn_playbookactivity_Filter,msdyn_playbookactivity_Fixed,msdyn_playbookactivity_Result,msdyn_playbookactivity_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_playbookactivityattribute_RelatedMany {
  msdyn_playbookactivityattribute_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_playbookactivityattribute_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_playbookactivityattribute_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_playbookactivityattribute_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_playbookactivityattribute_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_playbookactivityattribute_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_playbookactivityattribute_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_playbookactivityattribute_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_playbookactivityattribute_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_playbookactivityattributes: WebMappingRetrieve<msdyn_playbookactivityattribute_Select,msdyn_playbookactivityattribute_Expand,msdyn_playbookactivityattribute_Filter,msdyn_playbookactivityattribute_Fixed,msdyn_playbookactivityattribute_Result,msdyn_playbookactivityattribute_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_playbookactivityattributes: WebMappingRelated<msdyn_playbookactivityattribute_RelatedOne,msdyn_playbookactivityattribute_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_playbookactivityattributes: WebMappingCUDA<msdyn_playbookactivityattribute_Create,msdyn_playbookactivityattribute_Update,msdyn_playbookactivityattribute_Select>;
}
