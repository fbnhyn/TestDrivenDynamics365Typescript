interface msdyn_wechatengagementctx_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_city?: string | null;
  msdyn_country?: string | null;
  msdyn_customerid?: string | null;
  msdyn_customername?: string | null;
  msdyn_gender?: string | null;
  msdyn_name?: string | null;
  msdyn_profilepic?: string | null;
  msdyn_province?: string | null;
  msdyn_wechatengagementctxid?: string | null;
  msdyn_wechatengagementid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_wechatengagementctx_statecode | null;
  statuscode?: msdyn_wechatengagementctx_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_wechatengagementctx_Relationships {
  msdyn_wechatengagementctx_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_wechatengagementctx_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_wechatengagementctx_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_wechatengagementctx_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_wechatengagementctx_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_wechatengagementctx_SyncErrors?: SyncError_Result[] | null;
  msdyn_wechatengagementctx_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_wechatengagementctx extends msdyn_wechatengagementctx_Base, msdyn_wechatengagementctx_Relationships {
  msdyn_liveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_wechatengagementctx_Create extends msdyn_wechatengagementctx {
}
interface msdyn_wechatengagementctx_Update extends msdyn_wechatengagementctx {
}
interface msdyn_wechatengagementctx_Select {
  createdby_guid: WebAttribute<msdyn_wechatengagementctx_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_wechatengagementctx_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_wechatengagementctx_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_wechatengagementctx_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_wechatengagementctx_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_wechatengagementctx_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_wechatengagementctx_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_city: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_city: string | null }, {  }>;
  msdyn_country: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_country: string | null }, {  }>;
  msdyn_customerid: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_customerid: string | null }, {  }>;
  msdyn_customername: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_customername: string | null }, {  }>;
  msdyn_gender: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_gender: string | null }, {  }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_name: string | null }, {  }>;
  msdyn_profilepic: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_profilepic: string | null }, {  }>;
  msdyn_province: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_province: string | null }, {  }>;
  msdyn_wechatengagementctxid: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_wechatengagementctxid: string | null }, {  }>;
  msdyn_wechatengagementid: WebAttribute<msdyn_wechatengagementctx_Select, { msdyn_wechatengagementid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_wechatengagementctx_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_wechatengagementctx_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_wechatengagementctx_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_wechatengagementctx_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_wechatengagementctx_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_wechatengagementctx_Select, { statecode: msdyn_wechatengagementctx_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_wechatengagementctx_Select, { statuscode: msdyn_wechatengagementctx_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_wechatengagementctx_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_wechatengagementctx_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_wechatengagementctx_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_wechatengagementctx_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_city: string;
  msdyn_country: string;
  msdyn_customerid: string;
  msdyn_customername: string;
  msdyn_gender: string;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_profilepic: string;
  msdyn_province: string;
  msdyn_wechatengagementctxid: XQW.Guid;
  msdyn_wechatengagementid: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_wechatengagementctx_statecode;
  statuscode: msdyn_wechatengagementctx_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_wechatengagementctx_Expand {
  createdby: WebExpand<msdyn_wechatengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_wechatengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_wechatengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_wechatengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_liveworkitemid: WebExpand<msdyn_wechatengagementctx_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_wechatengagementctx_AsyncOperations: WebExpand<msdyn_wechatengagementctx_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_wechatengagementctx_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_wechatengagementctx_BulkDeleteFailures: WebExpand<msdyn_wechatengagementctx_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_wechatengagementctx_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_wechatengagementctx_MailboxTrackingFolders: WebExpand<msdyn_wechatengagementctx_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_wechatengagementctx_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_wechatengagementctx_PrincipalObjectAttributeAccesses: WebExpand<msdyn_wechatengagementctx_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_wechatengagementctx_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_wechatengagementctx_ProcessSession: WebExpand<msdyn_wechatengagementctx_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_wechatengagementctx_ProcessSession: ProcessSession_Result[] }>;
  msdyn_wechatengagementctx_SyncErrors: WebExpand<msdyn_wechatengagementctx_Expand, SyncError_Select, SyncError_Filter, { msdyn_wechatengagementctx_SyncErrors: SyncError_Result[] }>;
  msdyn_wechatengagementctx_UserEntityInstanceDatas: WebExpand<msdyn_wechatengagementctx_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_wechatengagementctx_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_wechatengagementctx_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_wechatengagementctx_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_wechatengagementctx_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_wechatengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_wechatengagementctx_FormattedResult {
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
interface msdyn_wechatengagementctx_Result extends msdyn_wechatengagementctx_Base, msdyn_wechatengagementctx_Relationships {
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
interface msdyn_wechatengagementctx_RelatedOne {
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
interface msdyn_wechatengagementctx_RelatedMany {
  msdyn_wechatengagementctx_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_wechatengagementctx_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_wechatengagementctx_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_wechatengagementctx_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_wechatengagementctx_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_wechatengagementctx_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_wechatengagementctx_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_wechatengagementctxes: WebMappingRetrieve<msdyn_wechatengagementctx_Select,msdyn_wechatengagementctx_Expand,msdyn_wechatengagementctx_Filter,msdyn_wechatengagementctx_Fixed,msdyn_wechatengagementctx_Result,msdyn_wechatengagementctx_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_wechatengagementctxes: WebMappingRelated<msdyn_wechatengagementctx_RelatedOne,msdyn_wechatengagementctx_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_wechatengagementctxes: WebMappingCUDA<msdyn_wechatengagementctx_Create,msdyn_wechatengagementctx_Update,msdyn_wechatengagementctx_Select>;
}
