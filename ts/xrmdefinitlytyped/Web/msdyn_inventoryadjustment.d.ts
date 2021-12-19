interface msdyn_inventoryadjustment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_adjustmenttime?: Date | null;
  msdyn_autonumbering?: string | null;
  msdyn_description?: string | null;
  msdyn_inventoryadjustmentid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_inventoryadjustment_statecode | null;
  statuscode?: msdyn_inventoryadjustment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_inventoryadjustment_Relationships {
  msdyn_inventoryadjustment_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_inventoryadjustment_Annotations?: Annotation_Result[] | null;
  msdyn_inventoryadjustment_Appointments?: Appointment_Result[] | null;
  msdyn_inventoryadjustment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_inventoryadjustment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_inventoryadjustment_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_inventoryadjustment_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_inventoryadjustment_Emails?: Email_Result[] | null;
  msdyn_inventoryadjustment_Faxes?: Fax_Result[] | null;
  msdyn_inventoryadjustment_Letters?: Letter_Result[] | null;
  msdyn_inventoryadjustment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_inventoryadjustment_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_inventoryadjustment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_inventoryadjustment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_inventoryadjustment_QueueItems?: QueueItem_Result[] | null;
  msdyn_inventoryadjustment_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_inventoryadjustment_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_inventoryadjustment_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_inventoryadjustment_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_inventoryadjustment_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_inventoryadjustment_SyncErrors?: SyncError_Result[] | null;
  msdyn_inventoryadjustment_Tasks?: Task_Result[] | null;
  msdyn_inventoryadjustment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_inventoryadjustment_connections1?: Connection_Result[] | null;
  msdyn_inventoryadjustment_connections2?: Connection_Result[] | null;
  msdyn_inventoryadjustment_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_inventoryadjustment_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_inventoryadjustment_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_inventoryadjustment_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_inventoryadjustment_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_inventoryadjustment_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_inventoryadjustment_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_inventoryadjustment_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  msdyn_msdyn_inventoryadjustment_msdyn_inventoryadjustmentproduct_InventoryAdjustment?: msdyn_inventoryadjustmentproduct_Result[] | null;
}
interface msdyn_inventoryadjustment extends msdyn_inventoryadjustment_Base, msdyn_inventoryadjustment_Relationships {
  msdyn_adjustedbyresource_bind$bookableresources?: string | null;
  msdyn_requestedbyresource_bind$bookableresources?: string | null;
  msdyn_warehouse_bind$msdyn_warehouses?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_inventoryadjustment_Create extends msdyn_inventoryadjustment {
}
interface msdyn_inventoryadjustment_Update extends msdyn_inventoryadjustment {
}
interface msdyn_inventoryadjustment_Select {
  createdby_guid: WebAttribute<msdyn_inventoryadjustment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_inventoryadjustment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_inventoryadjustment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_inventoryadjustment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_inventoryadjustment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_inventoryadjustment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_inventoryadjustment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_adjustedbyresource_guid: WebAttribute<msdyn_inventoryadjustment_Select, { msdyn_adjustedbyresource_guid: string | null }, { msdyn_adjustedbyresource_formatted?: string }>;
  msdyn_adjustmenttime: WebAttribute<msdyn_inventoryadjustment_Select, { msdyn_adjustmenttime: Date | null }, { msdyn_adjustmenttime_formatted?: string }>;
  msdyn_autonumbering: WebAttribute<msdyn_inventoryadjustment_Select, { msdyn_autonumbering: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_inventoryadjustment_Select, { msdyn_description: string | null }, {  }>;
  msdyn_inventoryadjustmentid: WebAttribute<msdyn_inventoryadjustment_Select, { msdyn_inventoryadjustmentid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_inventoryadjustment_Select, { msdyn_name: string | null }, {  }>;
  msdyn_requestedbyresource_guid: WebAttribute<msdyn_inventoryadjustment_Select, { msdyn_requestedbyresource_guid: string | null }, { msdyn_requestedbyresource_formatted?: string }>;
  msdyn_warehouse_guid: WebAttribute<msdyn_inventoryadjustment_Select, { msdyn_warehouse_guid: string | null }, { msdyn_warehouse_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_inventoryadjustment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_inventoryadjustment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_inventoryadjustment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_inventoryadjustment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_inventoryadjustment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_inventoryadjustment_Select, { statecode: msdyn_inventoryadjustment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_inventoryadjustment_Select, { statuscode: msdyn_inventoryadjustment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_inventoryadjustment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_inventoryadjustment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_inventoryadjustment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_inventoryadjustment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_adjustedbyresource_guid: XQW.Guid;
  msdyn_adjustmenttime: Date;
  msdyn_autonumbering: string;
  msdyn_description: string;
  msdyn_inventoryadjustmentid: XQW.Guid;
  msdyn_name: string;
  msdyn_requestedbyresource_guid: XQW.Guid;
  msdyn_warehouse_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_inventoryadjustment_statecode;
  statuscode: msdyn_inventoryadjustment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_inventoryadjustment_Expand {
  createdby: WebExpand<msdyn_inventoryadjustment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_inventoryadjustment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_inventoryadjustment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_inventoryadjustment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_adjustedbyresource: WebExpand<msdyn_inventoryadjustment_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_adjustedbyresource: BookableResource_Result }>;
  msdyn_inventoryadjustment_ActivityPointers: WebExpand<msdyn_inventoryadjustment_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_inventoryadjustment_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_inventoryadjustment_Annotations: WebExpand<msdyn_inventoryadjustment_Expand, Annotation_Select, Annotation_Filter, { msdyn_inventoryadjustment_Annotations: Annotation_Result[] }>;
  msdyn_inventoryadjustment_Appointments: WebExpand<msdyn_inventoryadjustment_Expand, Appointment_Select, Appointment_Filter, { msdyn_inventoryadjustment_Appointments: Appointment_Result[] }>;
  msdyn_inventoryadjustment_AsyncOperations: WebExpand<msdyn_inventoryadjustment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_inventoryadjustment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_inventoryadjustment_BulkDeleteFailures: WebExpand<msdyn_inventoryadjustment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_inventoryadjustment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_inventoryadjustment_DuplicateBaseRecord: WebExpand<msdyn_inventoryadjustment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inventoryadjustment_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_inventoryadjustment_DuplicateMatchingRecord: WebExpand<msdyn_inventoryadjustment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inventoryadjustment_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_inventoryadjustment_Emails: WebExpand<msdyn_inventoryadjustment_Expand, Email_Select, Email_Filter, { msdyn_inventoryadjustment_Emails: Email_Result[] }>;
  msdyn_inventoryadjustment_Faxes: WebExpand<msdyn_inventoryadjustment_Expand, Fax_Select, Fax_Filter, { msdyn_inventoryadjustment_Faxes: Fax_Result[] }>;
  msdyn_inventoryadjustment_Letters: WebExpand<msdyn_inventoryadjustment_Expand, Letter_Select, Letter_Filter, { msdyn_inventoryadjustment_Letters: Letter_Result[] }>;
  msdyn_inventoryadjustment_MailboxTrackingFolders: WebExpand<msdyn_inventoryadjustment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_inventoryadjustment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_inventoryadjustment_PhoneCalls: WebExpand<msdyn_inventoryadjustment_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_inventoryadjustment_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_inventoryadjustment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_inventoryadjustment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_inventoryadjustment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_inventoryadjustment_ProcessSession: WebExpand<msdyn_inventoryadjustment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_inventoryadjustment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_inventoryadjustment_QueueItems: WebExpand<msdyn_inventoryadjustment_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_inventoryadjustment_QueueItems: QueueItem_Result[] }>;
  msdyn_inventoryadjustment_RecurringAppointmentMasters: WebExpand<msdyn_inventoryadjustment_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_inventoryadjustment_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_inventoryadjustment_ServiceAppointments: WebExpand<msdyn_inventoryadjustment_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_inventoryadjustment_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_inventoryadjustment_SharePointDocumentLocations: WebExpand<msdyn_inventoryadjustment_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_inventoryadjustment_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_inventoryadjustment_SharePointDocuments: WebExpand<msdyn_inventoryadjustment_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_inventoryadjustment_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_inventoryadjustment_SocialActivities: WebExpand<msdyn_inventoryadjustment_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_inventoryadjustment_SocialActivities: SocialActivity_Result[] }>;
  msdyn_inventoryadjustment_SyncErrors: WebExpand<msdyn_inventoryadjustment_Expand, SyncError_Select, SyncError_Filter, { msdyn_inventoryadjustment_SyncErrors: SyncError_Result[] }>;
  msdyn_inventoryadjustment_Tasks: WebExpand<msdyn_inventoryadjustment_Expand, Task_Select, Task_Filter, { msdyn_inventoryadjustment_Tasks: Task_Result[] }>;
  msdyn_inventoryadjustment_UserEntityInstanceDatas: WebExpand<msdyn_inventoryadjustment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_inventoryadjustment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_inventoryadjustment_connections1: WebExpand<msdyn_inventoryadjustment_Expand, Connection_Select, Connection_Filter, { msdyn_inventoryadjustment_connections1: Connection_Result[] }>;
  msdyn_inventoryadjustment_connections2: WebExpand<msdyn_inventoryadjustment_Expand, Connection_Select, Connection_Filter, { msdyn_inventoryadjustment_connections2: Connection_Result[] }>;
  msdyn_inventoryadjustment_msdyn_approvals: WebExpand<msdyn_inventoryadjustment_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_inventoryadjustment_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_inventoryadjustment_msdyn_bookingalerts: WebExpand<msdyn_inventoryadjustment_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_inventoryadjustment_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_inventoryadjustment_msdyn_ocliveworkitems: WebExpand<msdyn_inventoryadjustment_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_inventoryadjustment_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_inventoryadjustment_msdyn_ocoutboundmessages: WebExpand<msdyn_inventoryadjustment_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_inventoryadjustment_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_inventoryadjustment_msdyn_ocsessions: WebExpand<msdyn_inventoryadjustment_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_inventoryadjustment_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_inventoryadjustment_msfp_alerts: WebExpand<msdyn_inventoryadjustment_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_inventoryadjustment_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_inventoryadjustment_msfp_surveyinvites: WebExpand<msdyn_inventoryadjustment_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_inventoryadjustment_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_inventoryadjustment_msfp_surveyresponses: WebExpand<msdyn_inventoryadjustment_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_inventoryadjustment_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_msdyn_inventoryadjustment_msdyn_inventoryadjustmentproduct_InventoryAdjustment: WebExpand<msdyn_inventoryadjustment_Expand, msdyn_inventoryadjustmentproduct_Select, msdyn_inventoryadjustmentproduct_Filter, { msdyn_msdyn_inventoryadjustment_msdyn_inventoryadjustmentproduct_InventoryAdjustment: msdyn_inventoryadjustmentproduct_Result[] }>;
  msdyn_requestedbyresource: WebExpand<msdyn_inventoryadjustment_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_requestedbyresource: BookableResource_Result }>;
  msdyn_warehouse: WebExpand<msdyn_inventoryadjustment_Expand, msdyn_warehouse_Select, msdyn_warehouse_Filter, { msdyn_warehouse: msdyn_warehouse_Result }>;
  ownerid: WebExpand<msdyn_inventoryadjustment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_inventoryadjustment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_inventoryadjustment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_inventoryadjustment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_inventoryadjustment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_adjustedbyresource_formatted?: string;
  msdyn_adjustmenttime_formatted?: string;
  msdyn_requestedbyresource_formatted?: string;
  msdyn_warehouse_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_inventoryadjustment_Result extends msdyn_inventoryadjustment_Base, msdyn_inventoryadjustment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_adjustedbyresource_guid: string | null;
  msdyn_requestedbyresource_guid: string | null;
  msdyn_warehouse_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_inventoryadjustment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_adjustedbyresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_requestedbyresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_warehouse: WebMappingRetrieve<msdyn_warehouse_Select,msdyn_warehouse_Expand,msdyn_warehouse_Filter,msdyn_warehouse_Fixed,msdyn_warehouse_Result,msdyn_warehouse_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_inventoryadjustment_RelatedMany {
  msdyn_inventoryadjustment_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_inventoryadjustment_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_inventoryadjustment_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_inventoryadjustment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_inventoryadjustment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_inventoryadjustment_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inventoryadjustment_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inventoryadjustment_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_inventoryadjustment_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_inventoryadjustment_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_inventoryadjustment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_inventoryadjustment_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_inventoryadjustment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_inventoryadjustment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_inventoryadjustment_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_inventoryadjustment_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_inventoryadjustment_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_inventoryadjustment_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_inventoryadjustment_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_inventoryadjustment_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_inventoryadjustment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_inventoryadjustment_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_inventoryadjustment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_inventoryadjustment_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_inventoryadjustment_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_inventoryadjustment_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_inventoryadjustment_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_inventoryadjustment_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_inventoryadjustment_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_inventoryadjustment_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_inventoryadjustment_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_inventoryadjustment_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_inventoryadjustment_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  msdyn_msdyn_inventoryadjustment_msdyn_inventoryadjustmentproduct_InventoryAdjustment: WebMappingRetrieve<msdyn_inventoryadjustmentproduct_Select,msdyn_inventoryadjustmentproduct_Expand,msdyn_inventoryadjustmentproduct_Filter,msdyn_inventoryadjustmentproduct_Fixed,msdyn_inventoryadjustmentproduct_Result,msdyn_inventoryadjustmentproduct_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_inventoryadjustments: WebMappingRetrieve<msdyn_inventoryadjustment_Select,msdyn_inventoryadjustment_Expand,msdyn_inventoryadjustment_Filter,msdyn_inventoryadjustment_Fixed,msdyn_inventoryadjustment_Result,msdyn_inventoryadjustment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_inventoryadjustments: WebMappingRelated<msdyn_inventoryadjustment_RelatedOne,msdyn_inventoryadjustment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_inventoryadjustments: WebMappingCUDA<msdyn_inventoryadjustment_Create,msdyn_inventoryadjustment_Update,msdyn_inventoryadjustment_Select>;
}
