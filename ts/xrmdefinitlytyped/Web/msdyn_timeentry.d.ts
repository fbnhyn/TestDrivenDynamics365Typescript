interface msdyn_timeentry_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_date?: Date | null;
  msdyn_description?: string | null;
  msdyn_duration?: number | null;
  msdyn_end?: Date | null;
  msdyn_entrystatus?: msdyn_timeentrystatus | null;
  msdyn_externaldescription?: string | null;
  msdyn_internalflags?: string | null;
  msdyn_relateditemid?: string | null;
  msdyn_relateditemtype?: msdyn_timeentry_msdyn_relateditemtype | null;
  msdyn_start?: Date | null;
  msdyn_targetentrystatus?: msdyn_timeentrystatus | null;
  msdyn_timeentryid?: string | null;
  msdyn_type?: msdyn_timeentrytype | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: msdyn_timeentry_statecode | null;
  statuscode?: msdyn_timeentry_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_timeentry_Relationships {
  msdyn_BookableResourceBooking?: BookableResourceBooking_Result | null;
  msdyn_BookingStatus?: BookingStatus_Result | null;
  msdyn_ResourceOrganizationalUnitId?: msdyn_organizationalunit_Result | null;
  msdyn_WorkOrder?: msdyn_workorder_Result | null;
  msdyn_msdyn_journal_msdyn_timeentry?: msdyn_journal_Result[] | null;
  msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry?: msdyn_projectapproval_Result[] | null;
  msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry?: msdyn_timeoffcalendar_Result[] | null;
  msdyn_projectTask?: msdyn_projecttask_Result | null;
  msdyn_resourceCategory?: BookableResourceCategory_Result | null;
  msdyn_timeentry_Annotations?: Annotation_Result[] | null;
  msdyn_timeentry_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_timeentry_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_timeentry_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_timeentry_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_timeentry_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_timeentry_SyncErrors?: SyncError_Result[] | null;
  msdyn_timeentry_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_timeentrysettingId?: msdyn_timeentrysetting_Result | null;
}
interface msdyn_timeentry extends msdyn_timeentry_Base, msdyn_timeentry_Relationships {
  msdyn_BookableResourceBooking_bind$bookableresourcebookings?: string | null;
  msdyn_BookingStatus_bind$bookingstatuses?: string | null;
  msdyn_ResourceOrganizationalUnitId_bind$msdyn_organizationalunits?: string | null;
  msdyn_WorkOrder_bind$msdyn_workorders?: string | null;
  msdyn_bookableresource_bind$bookableresources?: string | null;
  msdyn_manager_bind$systemusers?: string | null;
  msdyn_projectTask_bind$msdyn_projecttasks?: string | null;
  msdyn_project_bind$msdyn_projects?: string | null;
  msdyn_resourceCategory_bind$bookableresourcecategories?: string | null;
  msdyn_timeentrysettingId_bind$msdyn_timeentrysettings?: string | null;
  msdyn_timeoffrequest_bind$msdyn_timeoffrequests?: string | null;
  msdyn_transactioncategory_bind$msdyn_transactioncategories?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
}
interface msdyn_timeentry_Create extends msdyn_timeentry {
}
interface msdyn_timeentry_Update extends msdyn_timeentry {
}
interface msdyn_timeentry_Select {
  createdby_guid: WebAttribute<msdyn_timeentry_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_timeentry_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_timeentry_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_timeentry_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_timeentry_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_timeentry_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_timeentry_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_bookableresourcebooking_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_bookableresourcebooking_guid: string | null }, { msdyn_bookableresourcebooking_formatted?: string }>;
  msdyn_bookingstatus_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_bookingstatus_guid: string | null }, { msdyn_bookingstatus_formatted?: string }>;
  msdyn_date: WebAttribute<msdyn_timeentry_Select, { msdyn_date: Date | null }, { msdyn_date_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_timeentry_Select, { msdyn_description: string | null }, {  }>;
  msdyn_duration: WebAttribute<msdyn_timeentry_Select, { msdyn_duration: number | null }, {  }>;
  msdyn_end: WebAttribute<msdyn_timeentry_Select, { msdyn_end: Date | null }, { msdyn_end_formatted?: string }>;
  msdyn_entrystatus: WebAttribute<msdyn_timeentry_Select, { msdyn_entrystatus: msdyn_timeentrystatus | null }, { msdyn_entrystatus_formatted?: string }>;
  msdyn_externaldescription: WebAttribute<msdyn_timeentry_Select, { msdyn_externaldescription: string | null }, {  }>;
  msdyn_internalflags: WebAttribute<msdyn_timeentry_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_manager_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_manager_guid: string | null }, { msdyn_manager_formatted?: string }>;
  msdyn_project_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  msdyn_projecttask_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_projecttask_guid: string | null }, { msdyn_projecttask_formatted?: string }>;
  msdyn_relateditemid: WebAttribute<msdyn_timeentry_Select, { msdyn_relateditemid: string | null }, {  }>;
  msdyn_relateditemtype: WebAttribute<msdyn_timeentry_Select, { msdyn_relateditemtype: msdyn_timeentry_msdyn_relateditemtype | null }, { msdyn_relateditemtype_formatted?: string }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  msdyn_resourceorganizationalunitid_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_resourceorganizationalunitid_guid: string | null }, { msdyn_resourceorganizationalunitid_formatted?: string }>;
  msdyn_start: WebAttribute<msdyn_timeentry_Select, { msdyn_start: Date | null }, { msdyn_start_formatted?: string }>;
  msdyn_targetentrystatus: WebAttribute<msdyn_timeentry_Select, { msdyn_targetentrystatus: msdyn_timeentrystatus | null }, { msdyn_targetentrystatus_formatted?: string }>;
  msdyn_timeentryid: WebAttribute<msdyn_timeentry_Select, { msdyn_timeentryid: string | null }, {  }>;
  msdyn_timeentrysettingid_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_timeentrysettingid_guid: string | null }, { msdyn_timeentrysettingid_formatted?: string }>;
  msdyn_timeoffrequest_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_timeoffrequest_guid: string | null }, { msdyn_timeoffrequest_formatted?: string }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_timeentry_Select, { msdyn_type: msdyn_timeentrytype | null }, { msdyn_type_formatted?: string }>;
  msdyn_workorder_guid: WebAttribute<msdyn_timeentry_Select, { msdyn_workorder_guid: string | null }, { msdyn_workorder_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_timeentry_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_timeentry_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_timeentry_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_timeentry_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_timeentry_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<msdyn_timeentry_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<msdyn_timeentry_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_timeentry_Select, { statecode: msdyn_timeentry_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_timeentry_Select, { statuscode: msdyn_timeentry_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_timeentry_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<msdyn_timeentry_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_timeentry_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_timeentry_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_timeentry_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_bookableresourcebooking_guid: XQW.Guid;
  msdyn_bookingstatus_guid: XQW.Guid;
  msdyn_date: Date;
  msdyn_description: string;
  msdyn_duration: number;
  msdyn_end: Date;
  msdyn_entrystatus: msdyn_timeentrystatus;
  msdyn_externaldescription: string;
  msdyn_internalflags: string;
  msdyn_manager_guid: XQW.Guid;
  msdyn_project_guid: XQW.Guid;
  msdyn_projecttask_guid: XQW.Guid;
  msdyn_relateditemid: string;
  msdyn_relateditemtype: msdyn_timeentry_msdyn_relateditemtype;
  msdyn_resourcecategory_guid: XQW.Guid;
  msdyn_resourceorganizationalunitid_guid: XQW.Guid;
  msdyn_start: Date;
  msdyn_targetentrystatus: msdyn_timeentrystatus;
  msdyn_timeentryid: XQW.Guid;
  msdyn_timeentrysettingid_guid: XQW.Guid;
  msdyn_timeoffrequest_guid: XQW.Guid;
  msdyn_transactioncategory_guid: XQW.Guid;
  msdyn_type: msdyn_timeentrytype;
  msdyn_workorder_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: msdyn_timeentry_statecode;
  statuscode: msdyn_timeentry_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_timeentry_Expand {
  createdby: WebExpand<msdyn_timeentry_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_timeentry_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_timeentry_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_timeentry_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_BookableResourceBooking: WebExpand<msdyn_timeentry_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { msdyn_BookableResourceBooking: BookableResourceBooking_Result }>;
  msdyn_BookingStatus: WebExpand<msdyn_timeentry_Expand, BookingStatus_Select, BookingStatus_Filter, { msdyn_BookingStatus: BookingStatus_Result }>;
  msdyn_ResourceOrganizationalUnitId: WebExpand<msdyn_timeentry_Expand, msdyn_organizationalunit_Select, msdyn_organizationalunit_Filter, { msdyn_ResourceOrganizationalUnitId: msdyn_organizationalunit_Result }>;
  msdyn_WorkOrder: WebExpand<msdyn_timeentry_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_WorkOrder: msdyn_workorder_Result }>;
  msdyn_bookableresource: WebExpand<msdyn_timeentry_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_bookableresource: BookableResource_Result }>;
  msdyn_manager: WebExpand<msdyn_timeentry_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_manager: SystemUser_Result }>;
  msdyn_msdyn_journal_msdyn_timeentry: WebExpand<msdyn_timeentry_Expand, msdyn_journal_Select, msdyn_journal_Filter, { msdyn_msdyn_journal_msdyn_timeentry: msdyn_journal_Result[] }>;
  msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry: WebExpand<msdyn_timeentry_Expand, msdyn_projectapproval_Select, msdyn_projectapproval_Filter, { msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry: msdyn_projectapproval_Result[] }>;
  msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry: WebExpand<msdyn_timeentry_Expand, msdyn_timeoffcalendar_Select, msdyn_timeoffcalendar_Filter, { msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry: msdyn_timeoffcalendar_Result[] }>;
  msdyn_project: WebExpand<msdyn_timeentry_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_project: msdyn_project_Result }>;
  msdyn_projectTask: WebExpand<msdyn_timeentry_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_projectTask: msdyn_projecttask_Result }>;
  msdyn_resourceCategory: WebExpand<msdyn_timeentry_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_resourceCategory: BookableResourceCategory_Result }>;
  msdyn_timeentry_Annotations: WebExpand<msdyn_timeentry_Expand, Annotation_Select, Annotation_Filter, { msdyn_timeentry_Annotations: Annotation_Result[] }>;
  msdyn_timeentry_AsyncOperations: WebExpand<msdyn_timeentry_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_timeentry_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_timeentry_BulkDeleteFailures: WebExpand<msdyn_timeentry_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_timeentry_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_timeentry_MailboxTrackingFolders: WebExpand<msdyn_timeentry_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_timeentry_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_timeentry_PrincipalObjectAttributeAccesses: WebExpand<msdyn_timeentry_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_timeentry_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_timeentry_ProcessSession: WebExpand<msdyn_timeentry_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_timeentry_ProcessSession: ProcessSession_Result[] }>;
  msdyn_timeentry_SyncErrors: WebExpand<msdyn_timeentry_Expand, SyncError_Select, SyncError_Filter, { msdyn_timeentry_SyncErrors: SyncError_Result[] }>;
  msdyn_timeentry_UserEntityInstanceDatas: WebExpand<msdyn_timeentry_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_timeentry_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_timeentrysettingId: WebExpand<msdyn_timeentry_Expand, msdyn_timeentrysetting_Select, msdyn_timeentrysetting_Filter, { msdyn_timeentrysettingId: msdyn_timeentrysetting_Result }>;
  msdyn_timeoffrequest: WebExpand<msdyn_timeentry_Expand, msdyn_timeoffrequest_Select, msdyn_timeoffrequest_Filter, { msdyn_timeoffrequest: msdyn_timeoffrequest_Result }>;
  msdyn_transactioncategory: WebExpand<msdyn_timeentry_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_transactioncategory: msdyn_transactioncategory_Result }>;
  ownerid: WebExpand<msdyn_timeentry_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_timeentry_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_timeentry_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_timeentry_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<msdyn_timeentry_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
}
interface msdyn_timeentry_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_bookableresourcebooking_formatted?: string;
  msdyn_bookingstatus_formatted?: string;
  msdyn_date_formatted?: string;
  msdyn_end_formatted?: string;
  msdyn_entrystatus_formatted?: string;
  msdyn_manager_formatted?: string;
  msdyn_project_formatted?: string;
  msdyn_projecttask_formatted?: string;
  msdyn_relateditemtype_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  msdyn_resourceorganizationalunitid_formatted?: string;
  msdyn_start_formatted?: string;
  msdyn_targetentrystatus_formatted?: string;
  msdyn_timeentrysettingid_formatted?: string;
  msdyn_timeoffrequest_formatted?: string;
  msdyn_transactioncategory_formatted?: string;
  msdyn_type_formatted?: string;
  msdyn_workorder_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_timeentry_Result extends msdyn_timeentry_Base, msdyn_timeentry_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_bookableresourcebooking_guid: string | null;
  msdyn_bookingstatus_guid: string | null;
  msdyn_manager_guid: string | null;
  msdyn_project_guid: string | null;
  msdyn_projecttask_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  msdyn_resourceorganizationalunitid_guid: string | null;
  msdyn_timeentrysettingid_guid: string | null;
  msdyn_timeoffrequest_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  msdyn_workorder_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_timeentry_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_BookableResourceBooking: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  msdyn_BookingStatus: WebMappingRetrieve<BookingStatus_Select,BookingStatus_Expand,BookingStatus_Filter,BookingStatus_Fixed,BookingStatus_Result,BookingStatus_FormattedResult>;
  msdyn_ResourceOrganizationalUnitId: WebMappingRetrieve<msdyn_organizationalunit_Select,msdyn_organizationalunit_Expand,msdyn_organizationalunit_Filter,msdyn_organizationalunit_Fixed,msdyn_organizationalunit_Result,msdyn_organizationalunit_FormattedResult>;
  msdyn_WorkOrder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_bookableresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_manager: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_projectTask: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  msdyn_resourceCategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  msdyn_timeentrysettingId: WebMappingRetrieve<msdyn_timeentrysetting_Select,msdyn_timeentrysetting_Expand,msdyn_timeentrysetting_Filter,msdyn_timeentrysetting_Fixed,msdyn_timeentrysetting_Result,msdyn_timeentrysetting_FormattedResult>;
  msdyn_timeoffrequest: WebMappingRetrieve<msdyn_timeoffrequest_Select,msdyn_timeoffrequest_Expand,msdyn_timeoffrequest_Filter,msdyn_timeoffrequest_Fixed,msdyn_timeoffrequest_Result,msdyn_timeoffrequest_FormattedResult>;
  msdyn_transactioncategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
}
interface msdyn_timeentry_RelatedMany {
  msdyn_msdyn_journal_msdyn_timeentry: WebMappingRetrieve<msdyn_journal_Select,msdyn_journal_Expand,msdyn_journal_Filter,msdyn_journal_Fixed,msdyn_journal_Result,msdyn_journal_FormattedResult>;
  msdyn_msdyn_timeentry_msdyn_projectapproval_TimeEntry: WebMappingRetrieve<msdyn_projectapproval_Select,msdyn_projectapproval_Expand,msdyn_projectapproval_Filter,msdyn_projectapproval_Fixed,msdyn_projectapproval_Result,msdyn_projectapproval_FormattedResult>;
  msdyn_msdyn_timeentry_msdyn_timeoffcalendar_timeEntry: WebMappingRetrieve<msdyn_timeoffcalendar_Select,msdyn_timeoffcalendar_Expand,msdyn_timeoffcalendar_Filter,msdyn_timeoffcalendar_Fixed,msdyn_timeoffcalendar_Result,msdyn_timeoffcalendar_FormattedResult>;
  msdyn_timeentry_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_timeentry_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_timeentry_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_timeentry_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_timeentry_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_timeentry_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_timeentry_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_timeentry_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_timeentries: WebMappingRetrieve<msdyn_timeentry_Select,msdyn_timeentry_Expand,msdyn_timeentry_Filter,msdyn_timeentry_Fixed,msdyn_timeentry_Result,msdyn_timeentry_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_timeentries: WebMappingRelated<msdyn_timeentry_RelatedOne,msdyn_timeentry_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_timeentries: WebMappingCUDA<msdyn_timeentry_Create,msdyn_timeentry_Update,msdyn_timeentry_Select>;
}
