interface msdyn_attribute_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_attributeid?: string | null;
  msdyn_autogenerateattributevalues?: boolean | null;
  msdyn_linkedattributename?: string | null;
  msdyn_linkedobjecttypecode?: number | null;
  msdyn_name?: string | null;
  msdyn_reviewstatus?: msdyn_reviewstatus | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_attribute_statecode | null;
  statuscode?: msdyn_attribute_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_attribute_Relationships {
  msdyn_attribute_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_attribute_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_attribute_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_attribute_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_attribute_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_attribute_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_attribute_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_attribute_SyncErrors?: SyncError_Result[] | null;
  msdyn_attribute_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_attributeparent?: msdyn_attributevalue_Result[] | null;
}
interface msdyn_attribute extends msdyn_attribute_Base, msdyn_attribute_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_attribute_Create extends msdyn_attribute {
}
interface msdyn_attribute_Update extends msdyn_attribute {
}
interface msdyn_attribute_Select {
  createdby_guid: WebAttribute<msdyn_attribute_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_attribute_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_attribute_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_attribute_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_attribute_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_attribute_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_attribute_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_attributeid: WebAttribute<msdyn_attribute_Select, { msdyn_attributeid: string | null }, {  }>;
  msdyn_autogenerateattributevalues: WebAttribute<msdyn_attribute_Select, { msdyn_autogenerateattributevalues: boolean | null }, {  }>;
  msdyn_linkedattributename: WebAttribute<msdyn_attribute_Select, { msdyn_linkedattributename: string | null }, {  }>;
  msdyn_linkedobjecttypecode: WebAttribute<msdyn_attribute_Select, { msdyn_linkedobjecttypecode: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_attribute_Select, { msdyn_name: string | null }, {  }>;
  msdyn_reviewstatus: WebAttribute<msdyn_attribute_Select, { msdyn_reviewstatus: msdyn_reviewstatus | null }, { msdyn_reviewstatus_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_attribute_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_attribute_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_attribute_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_attribute_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_attribute_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_attribute_Select, { statecode: msdyn_attribute_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_attribute_Select, { statuscode: msdyn_attribute_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_attribute_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_attribute_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_attribute_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_attribute_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_attributeid: XQW.Guid;
  msdyn_autogenerateattributevalues: boolean;
  msdyn_linkedattributename: string;
  msdyn_linkedobjecttypecode: number;
  msdyn_name: string;
  msdyn_reviewstatus: msdyn_reviewstatus;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_attribute_statecode;
  statuscode: msdyn_attribute_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_attribute_Expand {
  createdby: WebExpand<msdyn_attribute_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_attribute_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_attribute_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_attribute_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_attribute_AsyncOperations: WebExpand<msdyn_attribute_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_attribute_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_attribute_BulkDeleteFailures: WebExpand<msdyn_attribute_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_attribute_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_attribute_DuplicateBaseRecord: WebExpand<msdyn_attribute_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_attribute_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_attribute_DuplicateMatchingRecord: WebExpand<msdyn_attribute_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_attribute_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_attribute_MailboxTrackingFolders: WebExpand<msdyn_attribute_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_attribute_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_attribute_PrincipalObjectAttributeAccesses: WebExpand<msdyn_attribute_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_attribute_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_attribute_ProcessSession: WebExpand<msdyn_attribute_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_attribute_ProcessSession: ProcessSession_Result[] }>;
  msdyn_attribute_SyncErrors: WebExpand<msdyn_attribute_Expand, SyncError_Select, SyncError_Filter, { msdyn_attribute_SyncErrors: SyncError_Result[] }>;
  msdyn_attribute_UserEntityInstanceDatas: WebExpand<msdyn_attribute_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_attribute_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_attributeparent: WebExpand<msdyn_attribute_Expand, msdyn_attributevalue_Select, msdyn_attributevalue_Filter, { msdyn_attributeparent: msdyn_attributevalue_Result[] }>;
  ownerid: WebExpand<msdyn_attribute_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_attribute_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_attribute_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_attribute_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_attribute_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_reviewstatus_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_attribute_Result extends msdyn_attribute_Base, msdyn_attribute_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_attribute_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_attribute_RelatedMany {
  msdyn_attribute_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_attribute_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_attribute_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_attribute_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_attribute_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_attribute_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_attribute_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_attribute_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_attribute_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_attributeparent: WebMappingRetrieve<msdyn_attributevalue_Select,msdyn_attributevalue_Expand,msdyn_attributevalue_Filter,msdyn_attributevalue_Fixed,msdyn_attributevalue_Result,msdyn_attributevalue_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_attribute: WebMappingRetrieve<msdyn_attribute_Select,msdyn_attribute_Expand,msdyn_attribute_Filter,msdyn_attribute_Fixed,msdyn_attribute_Result,msdyn_attribute_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_attribute: WebMappingRelated<msdyn_attribute_RelatedOne,msdyn_attribute_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_attribute: WebMappingCUDA<msdyn_attribute_Create,msdyn_attribute_Update,msdyn_attribute_Select>;
}
