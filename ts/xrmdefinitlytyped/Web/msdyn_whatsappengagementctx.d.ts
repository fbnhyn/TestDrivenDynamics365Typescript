interface msdyn_whatsappengagementctx_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_customerfirstmessage?: string | null;
  msdyn_customername?: string | null;
  msdyn_customerphonenumber?: string | null;
  msdyn_name?: string | null;
  msdyn_whatsappengagementctxid?: string | null;
  msdyn_whatsappengagementid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_whatsappengagementctx_statecode | null;
  statuscode?: msdyn_whatsappengagementctx_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_whatsappengagementctx_Relationships {
  msdyn_whatsappengagementctx_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_whatsappengagementctx_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_whatsappengagementctx_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_whatsappengagementctx_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_whatsappengagementctx_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_whatsappengagementctx_SyncErrors?: SyncError_Result[] | null;
  msdyn_whatsappengagementctx_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_whatsappengagementctx extends msdyn_whatsappengagementctx_Base, msdyn_whatsappengagementctx_Relationships {
  msdyn_liveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_whatsappengagementctx_Create extends msdyn_whatsappengagementctx {
}
interface msdyn_whatsappengagementctx_Update extends msdyn_whatsappengagementctx {
}
interface msdyn_whatsappengagementctx_Select {
  createdby_guid: WebAttribute<msdyn_whatsappengagementctx_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_whatsappengagementctx_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_whatsappengagementctx_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_whatsappengagementctx_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_whatsappengagementctx_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_whatsappengagementctx_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_whatsappengagementctx_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_customerfirstmessage: WebAttribute<msdyn_whatsappengagementctx_Select, { msdyn_customerfirstmessage: string | null }, {  }>;
  msdyn_customername: WebAttribute<msdyn_whatsappengagementctx_Select, { msdyn_customername: string | null }, {  }>;
  msdyn_customerphonenumber: WebAttribute<msdyn_whatsappengagementctx_Select, { msdyn_customerphonenumber: string | null }, {  }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_whatsappengagementctx_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_whatsappengagementctx_Select, { msdyn_name: string | null }, {  }>;
  msdyn_whatsappengagementctxid: WebAttribute<msdyn_whatsappengagementctx_Select, { msdyn_whatsappengagementctxid: string | null }, {  }>;
  msdyn_whatsappengagementid: WebAttribute<msdyn_whatsappengagementctx_Select, { msdyn_whatsappengagementid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_whatsappengagementctx_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_whatsappengagementctx_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_whatsappengagementctx_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_whatsappengagementctx_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_whatsappengagementctx_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_whatsappengagementctx_Select, { statecode: msdyn_whatsappengagementctx_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_whatsappengagementctx_Select, { statuscode: msdyn_whatsappengagementctx_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_whatsappengagementctx_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_whatsappengagementctx_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_whatsappengagementctx_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_whatsappengagementctx_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_customerfirstmessage: string;
  msdyn_customername: string;
  msdyn_customerphonenumber: string;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_whatsappengagementctxid: XQW.Guid;
  msdyn_whatsappengagementid: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_whatsappengagementctx_statecode;
  statuscode: msdyn_whatsappengagementctx_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_whatsappengagementctx_Expand {
  createdby: WebExpand<msdyn_whatsappengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_whatsappengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_whatsappengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_whatsappengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_liveworkitemid: WebExpand<msdyn_whatsappengagementctx_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_whatsappengagementctx_AsyncOperations: WebExpand<msdyn_whatsappengagementctx_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_whatsappengagementctx_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_whatsappengagementctx_BulkDeleteFailures: WebExpand<msdyn_whatsappengagementctx_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_whatsappengagementctx_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_whatsappengagementctx_MailboxTrackingFolders: WebExpand<msdyn_whatsappengagementctx_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_whatsappengagementctx_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_whatsappengagementctx_PrincipalObjectAttributeAccesses: WebExpand<msdyn_whatsappengagementctx_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_whatsappengagementctx_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_whatsappengagementctx_ProcessSession: WebExpand<msdyn_whatsappengagementctx_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_whatsappengagementctx_ProcessSession: ProcessSession_Result[] }>;
  msdyn_whatsappengagementctx_SyncErrors: WebExpand<msdyn_whatsappengagementctx_Expand, SyncError_Select, SyncError_Filter, { msdyn_whatsappengagementctx_SyncErrors: SyncError_Result[] }>;
  msdyn_whatsappengagementctx_UserEntityInstanceDatas: WebExpand<msdyn_whatsappengagementctx_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_whatsappengagementctx_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_whatsappengagementctx_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_whatsappengagementctx_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_whatsappengagementctx_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_whatsappengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_whatsappengagementctx_FormattedResult {
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
interface msdyn_whatsappengagementctx_Result extends msdyn_whatsappengagementctx_Base, msdyn_whatsappengagementctx_Relationships {
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
interface msdyn_whatsappengagementctx_RelatedOne {
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
interface msdyn_whatsappengagementctx_RelatedMany {
  msdyn_whatsappengagementctx_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_whatsappengagementctx_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_whatsappengagementctx_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_whatsappengagementctx_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_whatsappengagementctx_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_whatsappengagementctx_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_whatsappengagementctx_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_whatsappengagementctxes: WebMappingRetrieve<msdyn_whatsappengagementctx_Select,msdyn_whatsappengagementctx_Expand,msdyn_whatsappengagementctx_Filter,msdyn_whatsappengagementctx_Fixed,msdyn_whatsappengagementctx_Result,msdyn_whatsappengagementctx_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_whatsappengagementctxes: WebMappingRelated<msdyn_whatsappengagementctx_RelatedOne,msdyn_whatsappengagementctx_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_whatsappengagementctxes: WebMappingCUDA<msdyn_whatsappengagementctx_Create,msdyn_whatsappengagementctx_Update,msdyn_whatsappengagementctx_Select>;
}
