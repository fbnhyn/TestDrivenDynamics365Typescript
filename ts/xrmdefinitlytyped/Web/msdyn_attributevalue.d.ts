interface msdyn_attributevalue_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_attributevalueid?: string | null;
  msdyn_linkedvalue?: string | null;
  msdyn_name?: string | null;
  msdyn_reviewstatus?: msdyn_reviewstatus | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_attributevalue_statecode | null;
  statuscode?: msdyn_attributevalue_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_attributevalue_Relationships {
  msdyn_attributevalue_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_attributevalue_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_attributevalue_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_attributevalue_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_attributevalue_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_attributevalue_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_attributevalue_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_attributevalue_SyncErrors?: SyncError_Result[] | null;
  msdyn_attributevalue_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_attributevalue_systemuser?: SystemUser_Result[] | null;
}
interface msdyn_attributevalue extends msdyn_attributevalue_Base, msdyn_attributevalue_Relationships {
  msdyn_parentattribute_bind$msdyn_attribute?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_attributevalue_Create extends msdyn_attributevalue {
}
interface msdyn_attributevalue_Update extends msdyn_attributevalue {
}
interface msdyn_attributevalue_Select {
  createdby_guid: WebAttribute<msdyn_attributevalue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_attributevalue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_attributevalue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_attributevalue_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_attributevalue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_attributevalue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_attributevalue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_attributevalueid: WebAttribute<msdyn_attributevalue_Select, { msdyn_attributevalueid: string | null }, {  }>;
  msdyn_linkedvalue: WebAttribute<msdyn_attributevalue_Select, { msdyn_linkedvalue: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_attributevalue_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parentattribute_guid: WebAttribute<msdyn_attributevalue_Select, { msdyn_parentattribute_guid: string | null }, { msdyn_parentattribute_formatted?: string }>;
  msdyn_reviewstatus: WebAttribute<msdyn_attributevalue_Select, { msdyn_reviewstatus: msdyn_reviewstatus | null }, { msdyn_reviewstatus_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_attributevalue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_attributevalue_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_attributevalue_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_attributevalue_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_attributevalue_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_attributevalue_Select, { statecode: msdyn_attributevalue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_attributevalue_Select, { statuscode: msdyn_attributevalue_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_attributevalue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_attributevalue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_attributevalue_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_attributevalue_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_attributevalueid: XQW.Guid;
  msdyn_linkedvalue: string;
  msdyn_name: string;
  msdyn_parentattribute_guid: XQW.Guid;
  msdyn_reviewstatus: msdyn_reviewstatus;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_attributevalue_statecode;
  statuscode: msdyn_attributevalue_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_attributevalue_Expand {
  createdby: WebExpand<msdyn_attributevalue_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_attributevalue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_attributevalue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_attributevalue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_attributevalue_AsyncOperations: WebExpand<msdyn_attributevalue_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_attributevalue_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_attributevalue_BulkDeleteFailures: WebExpand<msdyn_attributevalue_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_attributevalue_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_attributevalue_DuplicateBaseRecord: WebExpand<msdyn_attributevalue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_attributevalue_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_attributevalue_DuplicateMatchingRecord: WebExpand<msdyn_attributevalue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_attributevalue_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_attributevalue_MailboxTrackingFolders: WebExpand<msdyn_attributevalue_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_attributevalue_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_attributevalue_PrincipalObjectAttributeAccesses: WebExpand<msdyn_attributevalue_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_attributevalue_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_attributevalue_ProcessSession: WebExpand<msdyn_attributevalue_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_attributevalue_ProcessSession: ProcessSession_Result[] }>;
  msdyn_attributevalue_SyncErrors: WebExpand<msdyn_attributevalue_Expand, SyncError_Select, SyncError_Filter, { msdyn_attributevalue_SyncErrors: SyncError_Result[] }>;
  msdyn_attributevalue_UserEntityInstanceDatas: WebExpand<msdyn_attributevalue_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_attributevalue_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_attributevalue_systemuser: WebExpand<msdyn_attributevalue_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_msdyn_attributevalue_systemuser: SystemUser_Result[] }>;
  msdyn_parentattribute: WebExpand<msdyn_attributevalue_Expand, msdyn_attribute_Select, msdyn_attribute_Filter, { msdyn_parentattribute: msdyn_attribute_Result }>;
  ownerid: WebExpand<msdyn_attributevalue_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_attributevalue_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_attributevalue_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_attributevalue_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_attributevalue_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_parentattribute_formatted?: string;
  msdyn_reviewstatus_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_attributevalue_Result extends msdyn_attributevalue_Base, msdyn_attributevalue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_parentattribute_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_attributevalue_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_parentattribute: WebMappingRetrieve<msdyn_attribute_Select,msdyn_attribute_Expand,msdyn_attribute_Filter,msdyn_attribute_Fixed,msdyn_attribute_Result,msdyn_attribute_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_attributevalue_RelatedMany {
  msdyn_attributevalue_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_attributevalue_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_attributevalue_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_attributevalue_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_attributevalue_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_attributevalue_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_attributevalue_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_attributevalue_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_attributevalue_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_attributevalue_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_attributevalues: WebMappingRetrieve<msdyn_attributevalue_Select,msdyn_attributevalue_Expand,msdyn_attributevalue_Filter,msdyn_attributevalue_Fixed,msdyn_attributevalue_Result,msdyn_attributevalue_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_attributevalues: WebMappingRelated<msdyn_attributevalue_RelatedOne,msdyn_attributevalue_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_attributevalues: WebMappingCUDA<msdyn_attributevalue_Create,msdyn_attributevalue_Update,msdyn_attributevalue_Select>;
}
