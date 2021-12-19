interface msdyn_notificationtemplate_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_acceptbuttontext?: string | null;
  msdyn_autoacceptnotification?: boolean | null;
  msdyn_description?: string | null;
  msdyn_desktopnotificationmode?: msdyn_desktopnotificationvisibility | null;
  msdyn_icon?: string | null;
  msdyn_name?: string | null;
  msdyn_notificationtemplateid?: string | null;
  msdyn_rejectbuttontext?: string | null;
  msdyn_showrejectbutton?: boolean | null;
  msdyn_showtimeout?: boolean | null;
  msdyn_theme?: msdyn_notificationtheme | null;
  msdyn_timeout?: number | null;
  msdyn_title?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_notificationtemplate_statecode | null;
  statuscode?: msdyn_notificationtemplate_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_notificationtemplate_Relationships {
  msdyn_notificationtemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_notificationtemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_notificationtemplate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_notificationtemplate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_notificationtemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_notificationtemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_notificationtemplate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_notificationtemplate_SyncErrors?: SyncError_Result[] | null;
  msdyn_notificationtemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_notificationtemplate_notificationfield?: msdyn_notificationfield_Result[] | null;
}
interface msdyn_notificationtemplate extends msdyn_notificationtemplate_Base, msdyn_notificationtemplate_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_notificationtemplate_Create extends msdyn_notificationtemplate {
}
interface msdyn_notificationtemplate_Update extends msdyn_notificationtemplate {
}
interface msdyn_notificationtemplate_Select {
  componentidunique: WebAttribute<msdyn_notificationtemplate_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_notificationtemplate_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_notificationtemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_notificationtemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_notificationtemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_notificationtemplate_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_notificationtemplate_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_notificationtemplate_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_notificationtemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_notificationtemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_notificationtemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_acceptbuttontext: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_acceptbuttontext: string | null }, {  }>;
  msdyn_autoacceptnotification: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_autoacceptnotification: boolean | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_description: string | null }, {  }>;
  msdyn_desktopnotificationmode: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_desktopnotificationmode: msdyn_desktopnotificationvisibility | null }, { msdyn_desktopnotificationmode_formatted?: string }>;
  msdyn_icon: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_icon: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_notificationtemplateid: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_notificationtemplateid: string | null }, {  }>;
  msdyn_rejectbuttontext: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_rejectbuttontext: string | null }, {  }>;
  msdyn_showrejectbutton: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_showrejectbutton: boolean | null }, {  }>;
  msdyn_showtimeout: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_showtimeout: boolean | null }, {  }>;
  msdyn_theme: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_theme: msdyn_notificationtheme | null }, { msdyn_theme_formatted?: string }>;
  msdyn_timeout: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_timeout: number | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_title: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_notificationtemplate_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_notificationtemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_notificationtemplate_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_notificationtemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_notificationtemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_notificationtemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_notificationtemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_notificationtemplate_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_notificationtemplate_Select, { statecode: msdyn_notificationtemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_notificationtemplate_Select, { statuscode: msdyn_notificationtemplate_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_notificationtemplate_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_notificationtemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_notificationtemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_notificationtemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_notificationtemplate_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_acceptbuttontext: string;
  msdyn_autoacceptnotification: boolean;
  msdyn_description: string;
  msdyn_desktopnotificationmode: msdyn_desktopnotificationvisibility;
  msdyn_icon: string;
  msdyn_name: string;
  msdyn_notificationtemplateid: XQW.Guid;
  msdyn_rejectbuttontext: string;
  msdyn_showrejectbutton: boolean;
  msdyn_showtimeout: boolean;
  msdyn_theme: msdyn_notificationtheme;
  msdyn_timeout: number;
  msdyn_title: string;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_notificationtemplate_statecode;
  statuscode: msdyn_notificationtemplate_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_notificationtemplate_Expand {
  createdby: WebExpand<msdyn_notificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_notificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_notificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_notificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_notificationtemplate_AsyncOperations: WebExpand<msdyn_notificationtemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_notificationtemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_notificationtemplate_BulkDeleteFailures: WebExpand<msdyn_notificationtemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_notificationtemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_notificationtemplate_DuplicateBaseRecord: WebExpand<msdyn_notificationtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_notificationtemplate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_notificationtemplate_DuplicateMatchingRecord: WebExpand<msdyn_notificationtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_notificationtemplate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_notificationtemplate_MailboxTrackingFolders: WebExpand<msdyn_notificationtemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_notificationtemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_notificationtemplate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_notificationtemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_notificationtemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_notificationtemplate_ProcessSession: WebExpand<msdyn_notificationtemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_notificationtemplate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_notificationtemplate_SyncErrors: WebExpand<msdyn_notificationtemplate_Expand, SyncError_Select, SyncError_Filter, { msdyn_notificationtemplate_SyncErrors: SyncError_Result[] }>;
  msdyn_notificationtemplate_UserEntityInstanceDatas: WebExpand<msdyn_notificationtemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_notificationtemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_notificationtemplate_notificationfield: WebExpand<msdyn_notificationtemplate_Expand, msdyn_notificationfield_Select, msdyn_notificationfield_Filter, { msdyn_notificationtemplate_notificationfield: msdyn_notificationfield_Result[] }>;
  ownerid: WebExpand<msdyn_notificationtemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_notificationtemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_notificationtemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_notificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_notificationtemplate_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_desktopnotificationmode_formatted?: string;
  msdyn_theme_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_notificationtemplate_Result extends msdyn_notificationtemplate_Base, msdyn_notificationtemplate_Relationships {
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
interface msdyn_notificationtemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_notificationtemplate_RelatedMany {
  msdyn_notificationtemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_notificationtemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_notificationtemplate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_notificationtemplate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_notificationtemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_notificationtemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_notificationtemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_notificationtemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_notificationtemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_notificationtemplate_notificationfield: WebMappingRetrieve<msdyn_notificationfield_Select,msdyn_notificationfield_Expand,msdyn_notificationfield_Filter,msdyn_notificationfield_Fixed,msdyn_notificationfield_Result,msdyn_notificationfield_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_notificationtemplates: WebMappingRetrieve<msdyn_notificationtemplate_Select,msdyn_notificationtemplate_Expand,msdyn_notificationtemplate_Filter,msdyn_notificationtemplate_Fixed,msdyn_notificationtemplate_Result,msdyn_notificationtemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_notificationtemplates: WebMappingRelated<msdyn_notificationtemplate_RelatedOne,msdyn_notificationtemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_notificationtemplates: WebMappingCUDA<msdyn_notificationtemplate_Create,msdyn_notificationtemplate_Update,msdyn_notificationtemplate_Select>;
}
