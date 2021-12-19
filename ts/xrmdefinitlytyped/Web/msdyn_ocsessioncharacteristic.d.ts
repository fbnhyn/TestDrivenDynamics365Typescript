interface msdyn_ocsessioncharacteristic_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_ocsessioncharacteristicid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsessioncharacteristic_statecode | null;
  statuscode?: msdyn_ocsessioncharacteristic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsessioncharacteristic_Relationships {
  msdyn_ocsessioncharacteristic_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsessioncharacteristic_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsessioncharacteristic_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsessioncharacteristic_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsessioncharacteristic_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsessioncharacteristic_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsessioncharacteristic_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsessioncharacteristic_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsessioncharacteristic_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocsessioncharacteristic extends msdyn_ocsessioncharacteristic_Base, msdyn_ocsessioncharacteristic_Relationships {
  msdyn_ocliveworkitemcharacteristic_bind$msdyn_ocliveworkitemcharacteristics?: string | null;
  msdyn_ocsession_bind$msdyn_ocsessions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocsessioncharacteristic_Create extends msdyn_ocsessioncharacteristic {
}
interface msdyn_ocsessioncharacteristic_Update extends msdyn_ocsessioncharacteristic {
}
interface msdyn_ocsessioncharacteristic_Select {
  createdby_guid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsessioncharacteristic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsessioncharacteristic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsessioncharacteristic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocsessioncharacteristic_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocliveworkitemcharacteristic_guid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { msdyn_ocliveworkitemcharacteristic_guid: string | null }, { msdyn_ocliveworkitemcharacteristic_formatted?: string }>;
  msdyn_ocsession_guid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { msdyn_ocsession_guid: string | null }, { msdyn_ocsession_formatted?: string }>;
  msdyn_ocsessioncharacteristicid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { msdyn_ocsessioncharacteristicid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocsessioncharacteristic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocsessioncharacteristic_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsessioncharacteristic_Select, { statecode: msdyn_ocsessioncharacteristic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsessioncharacteristic_Select, { statuscode: msdyn_ocsessioncharacteristic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsessioncharacteristic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsessioncharacteristic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsessioncharacteristic_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsessioncharacteristic_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocliveworkitemcharacteristic_guid: XQW.Guid;
  msdyn_ocsession_guid: XQW.Guid;
  msdyn_ocsessioncharacteristicid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocsessioncharacteristic_statecode;
  statuscode: msdyn_ocsessioncharacteristic_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsessioncharacteristic_Expand {
  createdby: WebExpand<msdyn_ocsessioncharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsessioncharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsessioncharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsessioncharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ocliveworkitemcharacteristic: WebExpand<msdyn_ocsessioncharacteristic_Expand, msdyn_ocliveworkitemcharacteristic_Select, msdyn_ocliveworkitemcharacteristic_Filter, { msdyn_ocliveworkitemcharacteristic: msdyn_ocliveworkitemcharacteristic_Result }>;
  msdyn_ocsession: WebExpand<msdyn_ocsessioncharacteristic_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_ocsession: msdyn_ocsession_Result }>;
  msdyn_ocsessioncharacteristic_AsyncOperations: WebExpand<msdyn_ocsessioncharacteristic_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsessioncharacteristic_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsessioncharacteristic_BulkDeleteFailures: WebExpand<msdyn_ocsessioncharacteristic_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsessioncharacteristic_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsessioncharacteristic_DuplicateBaseRecord: WebExpand<msdyn_ocsessioncharacteristic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsessioncharacteristic_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsessioncharacteristic_DuplicateMatchingRecord: WebExpand<msdyn_ocsessioncharacteristic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsessioncharacteristic_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsessioncharacteristic_MailboxTrackingFolders: WebExpand<msdyn_ocsessioncharacteristic_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsessioncharacteristic_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsessioncharacteristic_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsessioncharacteristic_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsessioncharacteristic_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsessioncharacteristic_ProcessSession: WebExpand<msdyn_ocsessioncharacteristic_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsessioncharacteristic_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsessioncharacteristic_SyncErrors: WebExpand<msdyn_ocsessioncharacteristic_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsessioncharacteristic_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsessioncharacteristic_UserEntityInstanceDatas: WebExpand<msdyn_ocsessioncharacteristic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsessioncharacteristic_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocsessioncharacteristic_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocsessioncharacteristic_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocsessioncharacteristic_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocsessioncharacteristic_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocsessioncharacteristic_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_ocliveworkitemcharacteristic_formatted?: string;
  msdyn_ocsession_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsessioncharacteristic_Result extends msdyn_ocsessioncharacteristic_Base, msdyn_ocsessioncharacteristic_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_ocliveworkitemcharacteristic_guid: string | null;
  msdyn_ocsession_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocsessioncharacteristic_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ocliveworkitemcharacteristic: WebMappingRetrieve<msdyn_ocliveworkitemcharacteristic_Select,msdyn_ocliveworkitemcharacteristic_Expand,msdyn_ocliveworkitemcharacteristic_Filter,msdyn_ocliveworkitemcharacteristic_Fixed,msdyn_ocliveworkitemcharacteristic_Result,msdyn_ocliveworkitemcharacteristic_FormattedResult>;
  msdyn_ocsession: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocsessioncharacteristic_RelatedMany {
  msdyn_ocsessioncharacteristic_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsessioncharacteristic_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsessioncharacteristic_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsessioncharacteristic_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsessioncharacteristic_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsessioncharacteristic_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsessioncharacteristic_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsessioncharacteristic_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsessioncharacteristic_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsessioncharacteristics: WebMappingRetrieve<msdyn_ocsessioncharacteristic_Select,msdyn_ocsessioncharacteristic_Expand,msdyn_ocsessioncharacteristic_Filter,msdyn_ocsessioncharacteristic_Fixed,msdyn_ocsessioncharacteristic_Result,msdyn_ocsessioncharacteristic_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsessioncharacteristics: WebMappingRelated<msdyn_ocsessioncharacteristic_RelatedOne,msdyn_ocsessioncharacteristic_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsessioncharacteristics: WebMappingCUDA<msdyn_ocsessioncharacteristic_Create,msdyn_ocsessioncharacteristic_Update,msdyn_ocsessioncharacteristic_Select>;
}
