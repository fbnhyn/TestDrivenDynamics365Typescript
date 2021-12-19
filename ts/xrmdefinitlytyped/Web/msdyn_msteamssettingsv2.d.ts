interface msdyn_msteamssettingsv2_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_defaultteamschattitleenabled?: boolean | null;
  msdyn_embedcollabserviceurl?: string | null;
  msdyn_embedcollabteamsintegrationenabled?: boolean | null;
  msdyn_msteamssettingsname?: string | null;
  msdyn_msteamssettingsv2id?: string | null;
  msdyn_tabserviceurl?: string | null;
  msdyn_teamsmeetingintegrationenabled?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_msteamssettingsv2_statecode | null;
  statuscode?: msdyn_msteamssettingsv2_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_msteamssettingsv2_Relationships {
  msdyn_msteamssettingsv2_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_msteamssettingsv2_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_msteamssettingsv2_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_msteamssettingsv2_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_msteamssettingsv2_SyncErrors?: SyncError_Result[] | null;
  msdyn_msteamssettingsv2_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_msteamssettingsv2 extends msdyn_msteamssettingsv2_Base, msdyn_msteamssettingsv2_Relationships {
}
interface msdyn_msteamssettingsv2_Create extends msdyn_msteamssettingsv2 {
  createdby_bind$systemusers?: string | null;
}
interface msdyn_msteamssettingsv2_Update extends msdyn_msteamssettingsv2 {
}
interface msdyn_msteamssettingsv2_Select {
  createdby_guid: WebAttribute<msdyn_msteamssettingsv2_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_msteamssettingsv2_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_msteamssettingsv2_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_msteamssettingsv2_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_msteamssettingsv2_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_msteamssettingsv2_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_msteamssettingsv2_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_defaultteamschattitleenabled: WebAttribute<msdyn_msteamssettingsv2_Select, { msdyn_defaultteamschattitleenabled: boolean | null }, {  }>;
  msdyn_embedcollabserviceurl: WebAttribute<msdyn_msteamssettingsv2_Select, { msdyn_embedcollabserviceurl: string | null }, {  }>;
  msdyn_embedcollabteamsintegrationenabled: WebAttribute<msdyn_msteamssettingsv2_Select, { msdyn_embedcollabteamsintegrationenabled: boolean | null }, {  }>;
  msdyn_msteamssettingsname: WebAttribute<msdyn_msteamssettingsv2_Select, { msdyn_msteamssettingsname: string | null }, {  }>;
  msdyn_msteamssettingsv2id: WebAttribute<msdyn_msteamssettingsv2_Select, { msdyn_msteamssettingsv2id: string | null }, {  }>;
  msdyn_tabserviceurl: WebAttribute<msdyn_msteamssettingsv2_Select, { msdyn_tabserviceurl: string | null }, {  }>;
  msdyn_teamsmeetingintegrationenabled: WebAttribute<msdyn_msteamssettingsv2_Select, { msdyn_teamsmeetingintegrationenabled: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_msteamssettingsv2_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_msteamssettingsv2_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  statecode: WebAttribute<msdyn_msteamssettingsv2_Select, { statecode: msdyn_msteamssettingsv2_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_msteamssettingsv2_Select, { statuscode: msdyn_msteamssettingsv2_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_msteamssettingsv2_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_msteamssettingsv2_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msteamssettingsv2_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msteamssettingsv2_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_defaultteamschattitleenabled: boolean;
  msdyn_embedcollabserviceurl: string;
  msdyn_embedcollabteamsintegrationenabled: boolean;
  msdyn_msteamssettingsname: string;
  msdyn_msteamssettingsv2id: XQW.Guid;
  msdyn_tabserviceurl: string;
  msdyn_teamsmeetingintegrationenabled: boolean;
  overriddencreatedon: Date;
  owningbusinessunit_guid: XQW.Guid;
  statecode: msdyn_msteamssettingsv2_statecode;
  statuscode: msdyn_msteamssettingsv2_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_msteamssettingsv2_Expand {
  createdby: WebExpand<msdyn_msteamssettingsv2_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_msteamssettingsv2_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_msteamssettingsv2_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_msteamssettingsv2_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msteamssettingsv2_AsyncOperations: WebExpand<msdyn_msteamssettingsv2_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_msteamssettingsv2_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_msteamssettingsv2_BulkDeleteFailures: WebExpand<msdyn_msteamssettingsv2_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_msteamssettingsv2_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_msteamssettingsv2_MailboxTrackingFolders: WebExpand<msdyn_msteamssettingsv2_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_msteamssettingsv2_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses: WebExpand<msdyn_msteamssettingsv2_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_msteamssettingsv2_ProcessSession: WebExpand<msdyn_msteamssettingsv2_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_msteamssettingsv2_ProcessSession: ProcessSession_Result[] }>;
  msdyn_msteamssettingsv2_SyncErrors: WebExpand<msdyn_msteamssettingsv2_Expand, SyncError_Select, SyncError_Filter, { msdyn_msteamssettingsv2_SyncErrors: SyncError_Result[] }>;
  msdyn_msteamssettingsv2_UserEntityInstanceDatas: WebExpand<msdyn_msteamssettingsv2_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_msteamssettingsv2_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface msdyn_msteamssettingsv2_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  owningbusinessunit_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_msteamssettingsv2_Result extends msdyn_msteamssettingsv2_Base, msdyn_msteamssettingsv2_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  owningbusinessunit_guid: string | null;
}
interface msdyn_msteamssettingsv2_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_msteamssettingsv2_RelatedMany {
  msdyn_msteamssettingsv2_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_msteamssettingsv2_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_msteamssettingsv2_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_msteamssettingsv2_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_msteamssettingsv2_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_msteamssettingsv2_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_msteamssettingsv2_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msteamssettingsv2: WebMappingRetrieve<msdyn_msteamssettingsv2_Select,msdyn_msteamssettingsv2_Expand,msdyn_msteamssettingsv2_Filter,msdyn_msteamssettingsv2_Fixed,msdyn_msteamssettingsv2_Result,msdyn_msteamssettingsv2_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msteamssettingsv2: WebMappingRelated<msdyn_msteamssettingsv2_RelatedOne,msdyn_msteamssettingsv2_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msteamssettingsv2: WebMappingCUDA<msdyn_msteamssettingsv2_Create,msdyn_msteamssettingsv2_Update,msdyn_msteamssettingsv2_Select>;
}
