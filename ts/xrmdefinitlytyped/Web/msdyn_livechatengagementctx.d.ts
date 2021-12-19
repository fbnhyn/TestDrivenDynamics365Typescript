interface msdyn_livechatengagementctx_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_browser?: string | null;
  msdyn_city?: string | null;
  msdyn_country?: string | null;
  msdyn_device?: string | null;
  msdyn_isauthenticated?: boolean | null;
  msdyn_isproactivechat?: boolean | null;
  msdyn_latitude?: string | null;
  msdyn_livechatengagementctxid?: string | null;
  msdyn_livechatengagementid?: string | null;
  msdyn_locale?: string | null;
  msdyn_longitude?: string | null;
  msdyn_name?: string | null;
  msdyn_originurl?: string | null;
  msdyn_os?: string | null;
  msdyn_portalcontactid?: string | null;
  msdyn_postalcode?: string | null;
  msdyn_state?: string | null;
  msdyn_street1?: string | null;
  msdyn_street2?: string | null;
  msdyn_street3?: string | null;
  msdyn_widgetappid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_livechatengagementctx_statecode | null;
  statuscode?: msdyn_livechatengagementctx_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_livechatengagementctx_Relationships {
  msdyn_livechatengagementctx_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_livechatengagementctx_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_livechatengagementctx_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_livechatengagementctx_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_livechatengagementctx_SyncErrors?: SyncError_Result[] | null;
  msdyn_livechatengagementctx_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_livechatengagementctx extends msdyn_livechatengagementctx_Base, msdyn_livechatengagementctx_Relationships {
  msdyn_liveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_livechatengagementctx_Create extends msdyn_livechatengagementctx {
}
interface msdyn_livechatengagementctx_Update extends msdyn_livechatengagementctx {
}
interface msdyn_livechatengagementctx_Select {
  createdby_guid: WebAttribute<msdyn_livechatengagementctx_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_livechatengagementctx_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_livechatengagementctx_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_livechatengagementctx_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_livechatengagementctx_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_livechatengagementctx_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_livechatengagementctx_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_browser: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_browser: string | null }, {  }>;
  msdyn_city: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_city: string | null }, {  }>;
  msdyn_country: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_country: string | null }, {  }>;
  msdyn_device: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_device: string | null }, {  }>;
  msdyn_isauthenticated: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_isauthenticated: boolean | null }, {  }>;
  msdyn_isproactivechat: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_isproactivechat: boolean | null }, {  }>;
  msdyn_latitude: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_latitude: string | null }, {  }>;
  msdyn_livechatengagementctxid: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_livechatengagementctxid: string | null }, {  }>;
  msdyn_livechatengagementid: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_livechatengagementid: string | null }, {  }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_locale: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_locale: string | null }, {  }>;
  msdyn_longitude: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_longitude: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_name: string | null }, {  }>;
  msdyn_originurl: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_originurl: string | null }, {  }>;
  msdyn_os: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_os: string | null }, {  }>;
  msdyn_portalcontactid: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_portalcontactid: string | null }, {  }>;
  msdyn_postalcode: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_postalcode: string | null }, {  }>;
  msdyn_state: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_state: string | null }, {  }>;
  msdyn_street1: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_street1: string | null }, {  }>;
  msdyn_street2: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_street2: string | null }, {  }>;
  msdyn_street3: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_street3: string | null }, {  }>;
  msdyn_widgetappid: WebAttribute<msdyn_livechatengagementctx_Select, { msdyn_widgetappid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_livechatengagementctx_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_livechatengagementctx_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_livechatengagementctx_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_livechatengagementctx_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_livechatengagementctx_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_livechatengagementctx_Select, { statecode: msdyn_livechatengagementctx_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_livechatengagementctx_Select, { statuscode: msdyn_livechatengagementctx_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_livechatengagementctx_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_livechatengagementctx_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_livechatengagementctx_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_livechatengagementctx_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_browser: string;
  msdyn_city: string;
  msdyn_country: string;
  msdyn_device: string;
  msdyn_isauthenticated: boolean;
  msdyn_isproactivechat: boolean;
  msdyn_latitude: string;
  msdyn_livechatengagementctxid: XQW.Guid;
  msdyn_livechatengagementid: string;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_locale: string;
  msdyn_longitude: string;
  msdyn_name: string;
  msdyn_originurl: string;
  msdyn_os: string;
  msdyn_portalcontactid: string;
  msdyn_postalcode: string;
  msdyn_state: string;
  msdyn_street1: string;
  msdyn_street2: string;
  msdyn_street3: string;
  msdyn_widgetappid: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_livechatengagementctx_statecode;
  statuscode: msdyn_livechatengagementctx_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_livechatengagementctx_Expand {
  createdby: WebExpand<msdyn_livechatengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_livechatengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_livechatengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_livechatengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_livechatengagementctx_AsyncOperations: WebExpand<msdyn_livechatengagementctx_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_livechatengagementctx_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_livechatengagementctx_BulkDeleteFailures: WebExpand<msdyn_livechatengagementctx_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_livechatengagementctx_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_livechatengagementctx_MailboxTrackingFolders: WebExpand<msdyn_livechatengagementctx_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_livechatengagementctx_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses: WebExpand<msdyn_livechatengagementctx_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_livechatengagementctx_ProcessSession: WebExpand<msdyn_livechatengagementctx_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_livechatengagementctx_ProcessSession: ProcessSession_Result[] }>;
  msdyn_livechatengagementctx_SyncErrors: WebExpand<msdyn_livechatengagementctx_Expand, SyncError_Select, SyncError_Filter, { msdyn_livechatengagementctx_SyncErrors: SyncError_Result[] }>;
  msdyn_livechatengagementctx_UserEntityInstanceDatas: WebExpand<msdyn_livechatengagementctx_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_livechatengagementctx_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_liveworkitemid: WebExpand<msdyn_livechatengagementctx_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitemid: msdyn_ocliveworkitem_Result }>;
  ownerid: WebExpand<msdyn_livechatengagementctx_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_livechatengagementctx_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_livechatengagementctx_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_livechatengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_livechatengagementctx_FormattedResult {
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
interface msdyn_livechatengagementctx_Result extends msdyn_livechatengagementctx_Base, msdyn_livechatengagementctx_Relationships {
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
interface msdyn_livechatengagementctx_RelatedOne {
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
interface msdyn_livechatengagementctx_RelatedMany {
  msdyn_livechatengagementctx_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_livechatengagementctx_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_livechatengagementctx_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_livechatengagementctx_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_livechatengagementctx_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_livechatengagementctx_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_livechatengagementctx_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_livechatengagementctxes: WebMappingRetrieve<msdyn_livechatengagementctx_Select,msdyn_livechatengagementctx_Expand,msdyn_livechatengagementctx_Filter,msdyn_livechatengagementctx_Fixed,msdyn_livechatengagementctx_Result,msdyn_livechatengagementctx_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_livechatengagementctxes: WebMappingRelated<msdyn_livechatengagementctx_RelatedOne,msdyn_livechatengagementctx_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_livechatengagementctxes: WebMappingCUDA<msdyn_livechatengagementctx_Create,msdyn_livechatengagementctx_Update,msdyn_livechatengagementctx_Select>;
}
