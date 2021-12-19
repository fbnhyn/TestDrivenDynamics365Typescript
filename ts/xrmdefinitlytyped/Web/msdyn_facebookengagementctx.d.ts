interface msdyn_facebookengagementctx_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_customerfirstname?: string | null;
  msdyn_customerlastname?: string | null;
  msdyn_customername?: string | null;
  msdyn_facebookengagementctxid?: string | null;
  msdyn_facebookengagementid?: string | null;
  msdyn_gender?: string | null;
  msdyn_locale?: string | null;
  msdyn_name?: string | null;
  msdyn_profilepic?: string | null;
  msdyn_timezone?: string | null;
  msdyn_userpagescopedid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_facebookengagementctx_statecode | null;
  statuscode?: msdyn_facebookengagementctx_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_facebookengagementctx_Relationships {
  msdyn_facebookengagementctx_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_facebookengagementctx_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_facebookengagementctx_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_facebookengagementctx_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_facebookengagementctx_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_facebookengagementctx_SyncErrors?: SyncError_Result[] | null;
  msdyn_facebookengagementctx_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_facebookengagementctx extends msdyn_facebookengagementctx_Base, msdyn_facebookengagementctx_Relationships {
  msdyn_liveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_facebookengagementctx_Create extends msdyn_facebookengagementctx {
}
interface msdyn_facebookengagementctx_Update extends msdyn_facebookengagementctx {
}
interface msdyn_facebookengagementctx_Select {
  createdby_guid: WebAttribute<msdyn_facebookengagementctx_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_facebookengagementctx_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_facebookengagementctx_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_facebookengagementctx_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_facebookengagementctx_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_facebookengagementctx_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_facebookengagementctx_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_customerfirstname: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_customerfirstname: string | null }, {  }>;
  msdyn_customerlastname: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_customerlastname: string | null }, {  }>;
  msdyn_customername: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_customername: string | null }, {  }>;
  msdyn_facebookengagementctxid: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_facebookengagementctxid: string | null }, {  }>;
  msdyn_facebookengagementid: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_facebookengagementid: string | null }, {  }>;
  msdyn_gender: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_gender: string | null }, {  }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_locale: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_locale: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_name: string | null }, {  }>;
  msdyn_profilepic: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_profilepic: string | null }, {  }>;
  msdyn_timezone: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_timezone: string | null }, {  }>;
  msdyn_userpagescopedid: WebAttribute<msdyn_facebookengagementctx_Select, { msdyn_userpagescopedid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_facebookengagementctx_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_facebookengagementctx_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_facebookengagementctx_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_facebookengagementctx_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_facebookengagementctx_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_facebookengagementctx_Select, { statecode: msdyn_facebookengagementctx_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_facebookengagementctx_Select, { statuscode: msdyn_facebookengagementctx_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_facebookengagementctx_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_facebookengagementctx_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_facebookengagementctx_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_facebookengagementctx_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_customerfirstname: string;
  msdyn_customerlastname: string;
  msdyn_customername: string;
  msdyn_facebookengagementctxid: XQW.Guid;
  msdyn_facebookengagementid: string;
  msdyn_gender: string;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_locale: string;
  msdyn_name: string;
  msdyn_profilepic: string;
  msdyn_timezone: string;
  msdyn_userpagescopedid: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_facebookengagementctx_statecode;
  statuscode: msdyn_facebookengagementctx_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_facebookengagementctx_Expand {
  createdby: WebExpand<msdyn_facebookengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_facebookengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_facebookengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_facebookengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_facebookengagementctx_AsyncOperations: WebExpand<msdyn_facebookengagementctx_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_facebookengagementctx_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_facebookengagementctx_BulkDeleteFailures: WebExpand<msdyn_facebookengagementctx_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_facebookengagementctx_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_facebookengagementctx_MailboxTrackingFolders: WebExpand<msdyn_facebookengagementctx_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_facebookengagementctx_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_facebookengagementctx_PrincipalObjectAttributeAccesses: WebExpand<msdyn_facebookengagementctx_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_facebookengagementctx_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_facebookengagementctx_ProcessSession: WebExpand<msdyn_facebookengagementctx_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_facebookengagementctx_ProcessSession: ProcessSession_Result[] }>;
  msdyn_facebookengagementctx_SyncErrors: WebExpand<msdyn_facebookengagementctx_Expand, SyncError_Select, SyncError_Filter, { msdyn_facebookengagementctx_SyncErrors: SyncError_Result[] }>;
  msdyn_facebookengagementctx_UserEntityInstanceDatas: WebExpand<msdyn_facebookengagementctx_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_facebookengagementctx_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_liveworkitemid: WebExpand<msdyn_facebookengagementctx_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitemid: msdyn_ocliveworkitem_Result }>;
  ownerid: WebExpand<msdyn_facebookengagementctx_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_facebookengagementctx_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_facebookengagementctx_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_facebookengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_facebookengagementctx_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkitemid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_facebookengagementctx_Result extends msdyn_facebookengagementctx_Base, msdyn_facebookengagementctx_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_facebookengagementctx_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_liveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_facebookengagementctx_RelatedMany {
  msdyn_facebookengagementctx_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_facebookengagementctx_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_facebookengagementctx_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_facebookengagementctx_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_facebookengagementctx_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_facebookengagementctx_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_facebookengagementctx_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_facebookengagementctxes: WebMappingRetrieve<msdyn_facebookengagementctx_Select,msdyn_facebookengagementctx_Expand,msdyn_facebookengagementctx_Filter,msdyn_facebookengagementctx_Fixed,msdyn_facebookengagementctx_Result,msdyn_facebookengagementctx_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_facebookengagementctxes: WebMappingRelated<msdyn_facebookengagementctx_RelatedOne,msdyn_facebookengagementctx_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_facebookengagementctxes: WebMappingCUDA<msdyn_facebookengagementctx_Create,msdyn_facebookengagementctx_Update,msdyn_facebookengagementctx_Select>;
}
