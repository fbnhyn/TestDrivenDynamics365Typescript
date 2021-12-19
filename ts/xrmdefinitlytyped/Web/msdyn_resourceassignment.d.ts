interface msdyn_resourceassignment_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_committype?: msdyn_committype | null;
  msdyn_fromdate?: Date | null;
  msdyn_hours?: number | null;
  msdyn_msprojectclientid?: string | null;
  msdyn_name?: string | null;
  msdyn_plannedcost?: number | null;
  msdyn_plannedcost_base?: number | null;
  msdyn_plannedcostcontour?: string | null;
  msdyn_plannedsales?: number | null;
  msdyn_plannedsales_base?: number | null;
  msdyn_plannedsalescontour?: string | null;
  msdyn_plannedwork?: string | null;
  msdyn_resourceassignmentid?: string | null;
  msdyn_todate?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_resourceassignment_statecode | null;
  statuscode?: msdyn_resourceassignment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_resourceassignment_Relationships {
  msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid?: msdyn_resourceassignmentdetail_Result[] | null;
  msdyn_resourceassignment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_resourceassignment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_resourceassignment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_resourceassignment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_resourceassignment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_resourceassignment_SyncErrors?: SyncError_Result[] | null;
  msdyn_resourceassignment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_resourceassignment extends msdyn_resourceassignment_Base, msdyn_resourceassignment_Relationships {
  msdyn_bookableresourceid_bind$bookableresources?: string | null;
  msdyn_bookingstatusid_bind$bookingstatuses?: string | null;
  msdyn_projectid_bind$msdyn_projects?: string | null;
  msdyn_projectteamid_bind$msdyn_projectteams?: string | null;
  msdyn_taskid_bind$msdyn_projecttasks?: string | null;
  msdyn_userresourceid_bind$systemusers?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_resourceassignment_Create extends msdyn_resourceassignment {
}
interface msdyn_resourceassignment_Update extends msdyn_resourceassignment {
}
interface msdyn_resourceassignment_Select {
  createdby_guid: WebAttribute<msdyn_resourceassignment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_resourceassignment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_resourceassignment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_resourceassignment_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_resourceassignment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_resourceassignment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_resourceassignment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_resourceassignment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresourceid_guid: WebAttribute<msdyn_resourceassignment_Select, { msdyn_bookableresourceid_guid: string | null }, { msdyn_bookableresourceid_formatted?: string }>;
  msdyn_bookingstatusid_guid: WebAttribute<msdyn_resourceassignment_Select, { msdyn_bookingstatusid_guid: string | null }, { msdyn_bookingstatusid_formatted?: string }>;
  msdyn_committype: WebAttribute<msdyn_resourceassignment_Select, { msdyn_committype: msdyn_committype | null }, { msdyn_committype_formatted?: string }>;
  msdyn_fromdate: WebAttribute<msdyn_resourceassignment_Select, { msdyn_fromdate: Date | null }, { msdyn_fromdate_formatted?: string }>;
  msdyn_hours: WebAttribute<msdyn_resourceassignment_Select, { msdyn_hours: number | null }, {  }>;
  msdyn_msprojectclientid: WebAttribute<msdyn_resourceassignment_Select, { msdyn_msprojectclientid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_resourceassignment_Select, { msdyn_name: string | null }, {  }>;
  msdyn_plannedcost: WebAttribute<msdyn_resourceassignment_Select, { msdyn_plannedcost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_plannedcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_plannedcost_base: WebAttribute<msdyn_resourceassignment_Select, { msdyn_plannedcost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_plannedcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_plannedcostcontour: WebAttribute<msdyn_resourceassignment_Select, { msdyn_plannedcostcontour: string | null }, {  }>;
  msdyn_plannedsales: WebAttribute<msdyn_resourceassignment_Select, { msdyn_plannedsales: number | null; transactioncurrencyid_guid: string | null }, { msdyn_plannedsales_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_plannedsales_base: WebAttribute<msdyn_resourceassignment_Select, { msdyn_plannedsales_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_plannedsales_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_plannedsalescontour: WebAttribute<msdyn_resourceassignment_Select, { msdyn_plannedsalescontour: string | null }, {  }>;
  msdyn_plannedwork: WebAttribute<msdyn_resourceassignment_Select, { msdyn_plannedwork: string | null }, {  }>;
  msdyn_projectid_guid: WebAttribute<msdyn_resourceassignment_Select, { msdyn_projectid_guid: string | null }, { msdyn_projectid_formatted?: string }>;
  msdyn_projectteamid_guid: WebAttribute<msdyn_resourceassignment_Select, { msdyn_projectteamid_guid: string | null }, { msdyn_projectteamid_formatted?: string }>;
  msdyn_resourceassignmentid: WebAttribute<msdyn_resourceassignment_Select, { msdyn_resourceassignmentid: string | null }, {  }>;
  msdyn_taskid_guid: WebAttribute<msdyn_resourceassignment_Select, { msdyn_taskid_guid: string | null }, { msdyn_taskid_formatted?: string }>;
  msdyn_todate: WebAttribute<msdyn_resourceassignment_Select, { msdyn_todate: Date | null }, { msdyn_todate_formatted?: string }>;
  msdyn_userresourceid_guid: WebAttribute<msdyn_resourceassignment_Select, { msdyn_userresourceid_guid: string | null }, { msdyn_userresourceid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_resourceassignment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_resourceassignment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_resourceassignment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_resourceassignment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_resourceassignment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_resourceassignment_Select, { statecode: msdyn_resourceassignment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_resourceassignment_Select, { statuscode: msdyn_resourceassignment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_resourceassignment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_resourceassignment_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_resourceassignment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resourceassignment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resourceassignment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresourceid_guid: XQW.Guid;
  msdyn_bookingstatusid_guid: XQW.Guid;
  msdyn_committype: msdyn_committype;
  msdyn_fromdate: Date;
  msdyn_hours: any;
  msdyn_msprojectclientid: string;
  msdyn_name: string;
  msdyn_plannedcost: number;
  msdyn_plannedcost_base: number;
  msdyn_plannedcostcontour: string;
  msdyn_plannedsales: number;
  msdyn_plannedsales_base: number;
  msdyn_plannedsalescontour: string;
  msdyn_plannedwork: string;
  msdyn_projectid_guid: XQW.Guid;
  msdyn_projectteamid_guid: XQW.Guid;
  msdyn_resourceassignmentid: XQW.Guid;
  msdyn_taskid_guid: XQW.Guid;
  msdyn_todate: Date;
  msdyn_userresourceid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_resourceassignment_statecode;
  statuscode: msdyn_resourceassignment_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_resourceassignment_Expand {
  createdby: WebExpand<msdyn_resourceassignment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_resourceassignment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_resourceassignment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_resourceassignment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_bookableresourceid: WebExpand<msdyn_resourceassignment_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_bookableresourceid: BookableResource_Result }>;
  msdyn_bookingstatusid: WebExpand<msdyn_resourceassignment_Expand, BookingStatus_Select, BookingStatus_Filter, { msdyn_bookingstatusid: BookingStatus_Result }>;
  msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid: WebExpand<msdyn_resourceassignment_Expand, msdyn_resourceassignmentdetail_Select, msdyn_resourceassignmentdetail_Filter, { msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid: msdyn_resourceassignmentdetail_Result[] }>;
  msdyn_projectid: WebExpand<msdyn_resourceassignment_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_projectid: msdyn_project_Result }>;
  msdyn_projectteamid: WebExpand<msdyn_resourceassignment_Expand, msdyn_projectteam_Select, msdyn_projectteam_Filter, { msdyn_projectteamid: msdyn_projectteam_Result }>;
  msdyn_resourceassignment_AsyncOperations: WebExpand<msdyn_resourceassignment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_resourceassignment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_resourceassignment_BulkDeleteFailures: WebExpand<msdyn_resourceassignment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_resourceassignment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_resourceassignment_MailboxTrackingFolders: WebExpand<msdyn_resourceassignment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_resourceassignment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_resourceassignment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_resourceassignment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_resourceassignment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_resourceassignment_ProcessSession: WebExpand<msdyn_resourceassignment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_resourceassignment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_resourceassignment_SyncErrors: WebExpand<msdyn_resourceassignment_Expand, SyncError_Select, SyncError_Filter, { msdyn_resourceassignment_SyncErrors: SyncError_Result[] }>;
  msdyn_resourceassignment_UserEntityInstanceDatas: WebExpand<msdyn_resourceassignment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_resourceassignment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_taskid: WebExpand<msdyn_resourceassignment_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_taskid: msdyn_projecttask_Result }>;
  msdyn_userresourceid: WebExpand<msdyn_resourceassignment_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_userresourceid: SystemUser_Result }>;
  ownerid: WebExpand<msdyn_resourceassignment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_resourceassignment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_resourceassignment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_resourceassignment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_resourceassignment_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_resourceassignment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresourceid_formatted?: string;
  msdyn_bookingstatusid_formatted?: string;
  msdyn_committype_formatted?: string;
  msdyn_fromdate_formatted?: string;
  msdyn_plannedcost_base_formatted?: string;
  msdyn_plannedcost_formatted?: string;
  msdyn_plannedsales_base_formatted?: string;
  msdyn_plannedsales_formatted?: string;
  msdyn_projectid_formatted?: string;
  msdyn_projectteamid_formatted?: string;
  msdyn_taskid_formatted?: string;
  msdyn_todate_formatted?: string;
  msdyn_userresourceid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_resourceassignment_Result extends msdyn_resourceassignment_Base, msdyn_resourceassignment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresourceid_guid: string | null;
  msdyn_bookingstatusid_guid: string | null;
  msdyn_projectid_guid: string | null;
  msdyn_projectteamid_guid: string | null;
  msdyn_taskid_guid: string | null;
  msdyn_userresourceid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_resourceassignment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_bookableresourceid: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_bookingstatusid: WebMappingRetrieve<BookingStatus_Select,BookingStatus_Expand,BookingStatus_Filter,BookingStatus_Fixed,BookingStatus_Result,BookingStatus_FormattedResult>;
  msdyn_projectid: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_projectteamid: WebMappingRetrieve<msdyn_projectteam_Select,msdyn_projectteam_Expand,msdyn_projectteam_Filter,msdyn_projectteam_Fixed,msdyn_projectteam_Result,msdyn_projectteam_FormattedResult>;
  msdyn_taskid: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  msdyn_userresourceid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_resourceassignment_RelatedMany {
  msdyn_msdyn_resourceassignment_msdyn_resourceassignmentdetail_resourceassignmentid: WebMappingRetrieve<msdyn_resourceassignmentdetail_Select,msdyn_resourceassignmentdetail_Expand,msdyn_resourceassignmentdetail_Filter,msdyn_resourceassignmentdetail_Fixed,msdyn_resourceassignmentdetail_Result,msdyn_resourceassignmentdetail_FormattedResult>;
  msdyn_resourceassignment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_resourceassignment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_resourceassignment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_resourceassignment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_resourceassignment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_resourceassignment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_resourceassignment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resourceassignments: WebMappingRetrieve<msdyn_resourceassignment_Select,msdyn_resourceassignment_Expand,msdyn_resourceassignment_Filter,msdyn_resourceassignment_Fixed,msdyn_resourceassignment_Result,msdyn_resourceassignment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resourceassignments: WebMappingRelated<msdyn_resourceassignment_RelatedOne,msdyn_resourceassignment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resourceassignments: WebMappingCUDA<msdyn_resourceassignment_Create,msdyn_resourceassignment_Update,msdyn_resourceassignment_Select>;
}
