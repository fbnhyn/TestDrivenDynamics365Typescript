interface msdyn_resourcepaytype_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_hourlymarkup?: number | null;
  msdyn_name?: string | null;
  msdyn_resourcepaytypeid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_resourcepaytype_statecode | null;
  statuscode?: msdyn_resourcepaytype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_resourcepaytype_Relationships {
  msdyn_msdyn_resourcepaytype_msdyn_bookingjournal_PayType?: msdyn_bookingjournal_Result[] | null;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_BreakPayType?: msdyn_fieldservicesetting_Result[] | null;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_BusinessClosurePayType?: msdyn_fieldservicesetting_Result[] | null;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_OvertimePayType?: msdyn_fieldservicesetting_Result[] | null;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_TravelPayType?: msdyn_fieldservicesetting_Result[] | null;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_WorkPayType?: msdyn_fieldservicesetting_Result[] | null;
  msdyn_resourcepaytype_Annotations?: Annotation_Result[] | null;
  msdyn_resourcepaytype_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_resourcepaytype_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_resourcepaytype_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_resourcepaytype_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_resourcepaytype_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_resourcepaytype_SyncErrors?: SyncError_Result[] | null;
  msdyn_resourcepaytype_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_resourcepaytype extends msdyn_resourcepaytype_Base, msdyn_resourcepaytype_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_resourcepaytype_Create extends msdyn_resourcepaytype {
}
interface msdyn_resourcepaytype_Update extends msdyn_resourcepaytype {
}
interface msdyn_resourcepaytype_Select {
  createdby_guid: WebAttribute<msdyn_resourcepaytype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_resourcepaytype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_resourcepaytype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_resourcepaytype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_resourcepaytype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_resourcepaytype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_resourcepaytype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_hourlymarkup: WebAttribute<msdyn_resourcepaytype_Select, { msdyn_hourlymarkup: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_resourcepaytype_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resourcepaytypeid: WebAttribute<msdyn_resourcepaytype_Select, { msdyn_resourcepaytypeid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_resourcepaytype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_resourcepaytype_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_resourcepaytype_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_resourcepaytype_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_resourcepaytype_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_resourcepaytype_Select, { statecode: msdyn_resourcepaytype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_resourcepaytype_Select, { statuscode: msdyn_resourcepaytype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_resourcepaytype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_resourcepaytype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resourcepaytype_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resourcepaytype_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_hourlymarkup: number;
  msdyn_name: string;
  msdyn_resourcepaytypeid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_resourcepaytype_statecode;
  statuscode: msdyn_resourcepaytype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_resourcepaytype_Expand {
  createdby: WebExpand<msdyn_resourcepaytype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_resourcepaytype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_resourcepaytype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_resourcepaytype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_resourcepaytype_msdyn_bookingjournal_PayType: WebExpand<msdyn_resourcepaytype_Expand, msdyn_bookingjournal_Select, msdyn_bookingjournal_Filter, { msdyn_msdyn_resourcepaytype_msdyn_bookingjournal_PayType: msdyn_bookingjournal_Result[] }>;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_BreakPayType: WebExpand<msdyn_resourcepaytype_Expand, msdyn_fieldservicesetting_Select, msdyn_fieldservicesetting_Filter, { msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_BreakPayType: msdyn_fieldservicesetting_Result[] }>;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_BusinessClosurePayType: WebExpand<msdyn_resourcepaytype_Expand, msdyn_fieldservicesetting_Select, msdyn_fieldservicesetting_Filter, { msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_BusinessClosurePayType: msdyn_fieldservicesetting_Result[] }>;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_OvertimePayType: WebExpand<msdyn_resourcepaytype_Expand, msdyn_fieldservicesetting_Select, msdyn_fieldservicesetting_Filter, { msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_OvertimePayType: msdyn_fieldservicesetting_Result[] }>;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_TravelPayType: WebExpand<msdyn_resourcepaytype_Expand, msdyn_fieldservicesetting_Select, msdyn_fieldservicesetting_Filter, { msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_TravelPayType: msdyn_fieldservicesetting_Result[] }>;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_WorkPayType: WebExpand<msdyn_resourcepaytype_Expand, msdyn_fieldservicesetting_Select, msdyn_fieldservicesetting_Filter, { msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_WorkPayType: msdyn_fieldservicesetting_Result[] }>;
  msdyn_resourcepaytype_Annotations: WebExpand<msdyn_resourcepaytype_Expand, Annotation_Select, Annotation_Filter, { msdyn_resourcepaytype_Annotations: Annotation_Result[] }>;
  msdyn_resourcepaytype_AsyncOperations: WebExpand<msdyn_resourcepaytype_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_resourcepaytype_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_resourcepaytype_BulkDeleteFailures: WebExpand<msdyn_resourcepaytype_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_resourcepaytype_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_resourcepaytype_MailboxTrackingFolders: WebExpand<msdyn_resourcepaytype_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_resourcepaytype_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_resourcepaytype_PrincipalObjectAttributeAccesses: WebExpand<msdyn_resourcepaytype_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_resourcepaytype_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_resourcepaytype_ProcessSession: WebExpand<msdyn_resourcepaytype_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_resourcepaytype_ProcessSession: ProcessSession_Result[] }>;
  msdyn_resourcepaytype_SyncErrors: WebExpand<msdyn_resourcepaytype_Expand, SyncError_Select, SyncError_Filter, { msdyn_resourcepaytype_SyncErrors: SyncError_Result[] }>;
  msdyn_resourcepaytype_UserEntityInstanceDatas: WebExpand<msdyn_resourcepaytype_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_resourcepaytype_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_resourcepaytype_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_resourcepaytype_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_resourcepaytype_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_resourcepaytype_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_resourcepaytype_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_resourcepaytype_Result extends msdyn_resourcepaytype_Base, msdyn_resourcepaytype_Relationships {
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
interface msdyn_resourcepaytype_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_resourcepaytype_RelatedMany {
  msdyn_msdyn_resourcepaytype_msdyn_bookingjournal_PayType: WebMappingRetrieve<msdyn_bookingjournal_Select,msdyn_bookingjournal_Expand,msdyn_bookingjournal_Filter,msdyn_bookingjournal_Fixed,msdyn_bookingjournal_Result,msdyn_bookingjournal_FormattedResult>;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_BreakPayType: WebMappingRetrieve<msdyn_fieldservicesetting_Select,msdyn_fieldservicesetting_Expand,msdyn_fieldservicesetting_Filter,msdyn_fieldservicesetting_Fixed,msdyn_fieldservicesetting_Result,msdyn_fieldservicesetting_FormattedResult>;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_BusinessClosurePayType: WebMappingRetrieve<msdyn_fieldservicesetting_Select,msdyn_fieldservicesetting_Expand,msdyn_fieldservicesetting_Filter,msdyn_fieldservicesetting_Fixed,msdyn_fieldservicesetting_Result,msdyn_fieldservicesetting_FormattedResult>;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_OvertimePayType: WebMappingRetrieve<msdyn_fieldservicesetting_Select,msdyn_fieldservicesetting_Expand,msdyn_fieldservicesetting_Filter,msdyn_fieldservicesetting_Fixed,msdyn_fieldservicesetting_Result,msdyn_fieldservicesetting_FormattedResult>;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_TravelPayType: WebMappingRetrieve<msdyn_fieldservicesetting_Select,msdyn_fieldservicesetting_Expand,msdyn_fieldservicesetting_Filter,msdyn_fieldservicesetting_Fixed,msdyn_fieldservicesetting_Result,msdyn_fieldservicesetting_FormattedResult>;
  msdyn_msdyn_resourcepaytype_msdyn_fieldservicesetting_WorkPayType: WebMappingRetrieve<msdyn_fieldservicesetting_Select,msdyn_fieldservicesetting_Expand,msdyn_fieldservicesetting_Filter,msdyn_fieldservicesetting_Fixed,msdyn_fieldservicesetting_Result,msdyn_fieldservicesetting_FormattedResult>;
  msdyn_resourcepaytype_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_resourcepaytype_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_resourcepaytype_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_resourcepaytype_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_resourcepaytype_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_resourcepaytype_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_resourcepaytype_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_resourcepaytype_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resourcepaytypes: WebMappingRetrieve<msdyn_resourcepaytype_Select,msdyn_resourcepaytype_Expand,msdyn_resourcepaytype_Filter,msdyn_resourcepaytype_Fixed,msdyn_resourcepaytype_Result,msdyn_resourcepaytype_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resourcepaytypes: WebMappingRelated<msdyn_resourcepaytype_RelatedOne,msdyn_resourcepaytype_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resourcepaytypes: WebMappingCUDA<msdyn_resourcepaytype_Create,msdyn_resourcepaytype_Update,msdyn_resourcepaytype_Select>;
}
