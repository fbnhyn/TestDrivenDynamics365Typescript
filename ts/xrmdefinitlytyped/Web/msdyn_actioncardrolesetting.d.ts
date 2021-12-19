interface msdyn_actioncardrolesetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_actioncardrolesettingid?: string | null;
  msdyn_isdisabled?: boolean | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_actioncardrolesetting_statecode | null;
  statuscode?: msdyn_actioncardrolesetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_actioncardrolesetting_Relationships {
  msdyn_Roleid?: Role_Result | null;
  msdyn_actioncardrolesetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_actioncardrolesetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_actioncardrolesetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_actioncardrolesetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_actioncardrolesetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_actioncardrolesetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_actioncardrolesetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_actioncardrolesetting extends msdyn_actioncardrolesetting_Base, msdyn_actioncardrolesetting_Relationships {
  msdyn_Roleid_bind$roles?: string | null;
  msdyn_cardtypeid_bind$cardtype?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_actioncardrolesetting_Create extends msdyn_actioncardrolesetting {
}
interface msdyn_actioncardrolesetting_Update extends msdyn_actioncardrolesetting {
}
interface msdyn_actioncardrolesetting_Select {
  createdby_guid: WebAttribute<msdyn_actioncardrolesetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_actioncardrolesetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_actioncardrolesetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_actioncardrolesetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_actioncardrolesetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_actioncardrolesetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_actioncardrolesetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actioncardrolesettingid: WebAttribute<msdyn_actioncardrolesetting_Select, { msdyn_actioncardrolesettingid: string | null }, {  }>;
  msdyn_cardtypeid_guid: WebAttribute<msdyn_actioncardrolesetting_Select, { msdyn_cardtypeid_guid: string | null }, { msdyn_cardtypeid_formatted?: string }>;
  msdyn_isdisabled: WebAttribute<msdyn_actioncardrolesetting_Select, { msdyn_isdisabled: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_actioncardrolesetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_roleid_guid: WebAttribute<msdyn_actioncardrolesetting_Select, { msdyn_roleid_guid: string | null }, { msdyn_roleid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_actioncardrolesetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_actioncardrolesetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_actioncardrolesetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_actioncardrolesetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_actioncardrolesetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_actioncardrolesetting_Select, { statecode: msdyn_actioncardrolesetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_actioncardrolesetting_Select, { statuscode: msdyn_actioncardrolesetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_actioncardrolesetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_actioncardrolesetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_actioncardrolesetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_actioncardrolesetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actioncardrolesettingid: XQW.Guid;
  msdyn_cardtypeid_guid: XQW.Guid;
  msdyn_isdisabled: boolean;
  msdyn_name: string;
  msdyn_roleid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_actioncardrolesetting_statecode;
  statuscode: msdyn_actioncardrolesetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_actioncardrolesetting_Expand {
  createdby: WebExpand<msdyn_actioncardrolesetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_actioncardrolesetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_actioncardrolesetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_actioncardrolesetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Roleid: WebExpand<msdyn_actioncardrolesetting_Expand, Role_Select, Role_Filter, { msdyn_Roleid: Role_Result }>;
  msdyn_actioncardrolesetting_AsyncOperations: WebExpand<msdyn_actioncardrolesetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_actioncardrolesetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_actioncardrolesetting_BulkDeleteFailures: WebExpand<msdyn_actioncardrolesetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_actioncardrolesetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_actioncardrolesetting_MailboxTrackingFolders: WebExpand<msdyn_actioncardrolesetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_actioncardrolesetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_actioncardrolesetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_actioncardrolesetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_actioncardrolesetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_actioncardrolesetting_ProcessSession: WebExpand<msdyn_actioncardrolesetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_actioncardrolesetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_actioncardrolesetting_SyncErrors: WebExpand<msdyn_actioncardrolesetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_actioncardrolesetting_SyncErrors: SyncError_Result[] }>;
  msdyn_actioncardrolesetting_UserEntityInstanceDatas: WebExpand<msdyn_actioncardrolesetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_actioncardrolesetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_cardtypeid: WebExpand<msdyn_actioncardrolesetting_Expand, CardType_Select, CardType_Filter, { msdyn_cardtypeid: CardType_Result }>;
  ownerid: WebExpand<msdyn_actioncardrolesetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_actioncardrolesetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_actioncardrolesetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_actioncardrolesetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_actioncardrolesetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_cardtypeid_formatted?: string;
  msdyn_roleid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_actioncardrolesetting_Result extends msdyn_actioncardrolesetting_Base, msdyn_actioncardrolesetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_cardtypeid_guid: string | null;
  msdyn_roleid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_actioncardrolesetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Roleid: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
  msdyn_cardtypeid: WebMappingRetrieve<CardType_Select,CardType_Expand,CardType_Filter,CardType_Fixed,CardType_Result,CardType_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_actioncardrolesetting_RelatedMany {
  msdyn_actioncardrolesetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_actioncardrolesetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_actioncardrolesetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_actioncardrolesetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_actioncardrolesetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_actioncardrolesetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_actioncardrolesetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_actioncardrolesettings: WebMappingRetrieve<msdyn_actioncardrolesetting_Select,msdyn_actioncardrolesetting_Expand,msdyn_actioncardrolesetting_Filter,msdyn_actioncardrolesetting_Fixed,msdyn_actioncardrolesetting_Result,msdyn_actioncardrolesetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_actioncardrolesettings: WebMappingRelated<msdyn_actioncardrolesetting_RelatedOne,msdyn_actioncardrolesetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_actioncardrolesettings: WebMappingCUDA<msdyn_actioncardrolesetting_Create,msdyn_actioncardrolesetting_Update,msdyn_actioncardrolesetting_Select>;
}
