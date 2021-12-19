interface msdyn_teamsengagementctx_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_customerfirstname?: string | null;
  msdyn_customerid?: string | null;
  msdyn_customerlastname?: string | null;
  msdyn_customername?: string | null;
  msdyn_email?: string | null;
  msdyn_name?: string | null;
  msdyn_teamsengagementctxid?: string | null;
  msdyn_teamsengagementid?: string | null;
  msdyn_userprinicipalname?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_teamsengagementctx_statecode | null;
  statuscode?: msdyn_teamsengagementctx_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_teamsengagementctx_Relationships {
  msdyn_teamsengagementctx_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_teamsengagementctx_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_teamsengagementctx_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_teamsengagementctx_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_teamsengagementctx_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_teamsengagementctx_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_teamsengagementctx_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_teamsengagementctx_SyncErrors?: SyncError_Result[] | null;
  msdyn_teamsengagementctx_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_teamsengagementctx extends msdyn_teamsengagementctx_Base, msdyn_teamsengagementctx_Relationships {
  msdyn_liveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_teamsengagementctx_Create extends msdyn_teamsengagementctx {
}
interface msdyn_teamsengagementctx_Update extends msdyn_teamsengagementctx {
}
interface msdyn_teamsengagementctx_Select {
  createdby_guid: WebAttribute<msdyn_teamsengagementctx_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_teamsengagementctx_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_teamsengagementctx_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_teamsengagementctx_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_teamsengagementctx_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_teamsengagementctx_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_teamsengagementctx_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_customerfirstname: WebAttribute<msdyn_teamsengagementctx_Select, { msdyn_customerfirstname: string | null }, {  }>;
  msdyn_customerid: WebAttribute<msdyn_teamsengagementctx_Select, { msdyn_customerid: string | null }, {  }>;
  msdyn_customerlastname: WebAttribute<msdyn_teamsengagementctx_Select, { msdyn_customerlastname: string | null }, {  }>;
  msdyn_customername: WebAttribute<msdyn_teamsengagementctx_Select, { msdyn_customername: string | null }, {  }>;
  msdyn_email: WebAttribute<msdyn_teamsengagementctx_Select, { msdyn_email: string | null }, {  }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_teamsengagementctx_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_teamsengagementctx_Select, { msdyn_name: string | null }, {  }>;
  msdyn_teamsengagementctxid: WebAttribute<msdyn_teamsengagementctx_Select, { msdyn_teamsengagementctxid: string | null }, {  }>;
  msdyn_teamsengagementid: WebAttribute<msdyn_teamsengagementctx_Select, { msdyn_teamsengagementid: string | null }, {  }>;
  msdyn_userprinicipalname: WebAttribute<msdyn_teamsengagementctx_Select, { msdyn_userprinicipalname: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_teamsengagementctx_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_teamsengagementctx_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_teamsengagementctx_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_teamsengagementctx_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_teamsengagementctx_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_teamsengagementctx_Select, { statecode: msdyn_teamsengagementctx_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_teamsengagementctx_Select, { statuscode: msdyn_teamsengagementctx_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_teamsengagementctx_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_teamsengagementctx_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_teamsengagementctx_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_teamsengagementctx_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_customerfirstname: string;
  msdyn_customerid: string;
  msdyn_customerlastname: string;
  msdyn_customername: string;
  msdyn_email: string;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_teamsengagementctxid: XQW.Guid;
  msdyn_teamsengagementid: string;
  msdyn_userprinicipalname: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_teamsengagementctx_statecode;
  statuscode: msdyn_teamsengagementctx_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_teamsengagementctx_Expand {
  createdby: WebExpand<msdyn_teamsengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_teamsengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_teamsengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_teamsengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_liveworkitemid: WebExpand<msdyn_teamsengagementctx_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_teamsengagementctx_AsyncOperations: WebExpand<msdyn_teamsengagementctx_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_teamsengagementctx_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_teamsengagementctx_BulkDeleteFailures: WebExpand<msdyn_teamsengagementctx_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_teamsengagementctx_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_teamsengagementctx_DuplicateBaseRecord: WebExpand<msdyn_teamsengagementctx_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_teamsengagementctx_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_teamsengagementctx_DuplicateMatchingRecord: WebExpand<msdyn_teamsengagementctx_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_teamsengagementctx_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_teamsengagementctx_MailboxTrackingFolders: WebExpand<msdyn_teamsengagementctx_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_teamsengagementctx_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_teamsengagementctx_PrincipalObjectAttributeAccesses: WebExpand<msdyn_teamsengagementctx_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_teamsengagementctx_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_teamsengagementctx_ProcessSession: WebExpand<msdyn_teamsengagementctx_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_teamsengagementctx_ProcessSession: ProcessSession_Result[] }>;
  msdyn_teamsengagementctx_SyncErrors: WebExpand<msdyn_teamsengagementctx_Expand, SyncError_Select, SyncError_Filter, { msdyn_teamsengagementctx_SyncErrors: SyncError_Result[] }>;
  msdyn_teamsengagementctx_UserEntityInstanceDatas: WebExpand<msdyn_teamsengagementctx_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_teamsengagementctx_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_teamsengagementctx_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_teamsengagementctx_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_teamsengagementctx_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_teamsengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_teamsengagementctx_FormattedResult {
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
interface msdyn_teamsengagementctx_Result extends msdyn_teamsengagementctx_Base, msdyn_teamsengagementctx_Relationships {
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
interface msdyn_teamsengagementctx_RelatedOne {
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
interface msdyn_teamsengagementctx_RelatedMany {
  msdyn_teamsengagementctx_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_teamsengagementctx_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_teamsengagementctx_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_teamsengagementctx_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_teamsengagementctx_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_teamsengagementctx_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_teamsengagementctx_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_teamsengagementctx_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_teamsengagementctx_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_teamsengagementctxes: WebMappingRetrieve<msdyn_teamsengagementctx_Select,msdyn_teamsengagementctx_Expand,msdyn_teamsengagementctx_Filter,msdyn_teamsengagementctx_Fixed,msdyn_teamsengagementctx_Result,msdyn_teamsengagementctx_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_teamsengagementctxes: WebMappingRelated<msdyn_teamsengagementctx_RelatedOne,msdyn_teamsengagementctx_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_teamsengagementctxes: WebMappingCUDA<msdyn_teamsengagementctx_Create,msdyn_teamsengagementctx_Update,msdyn_teamsengagementctx_Select>;
}
