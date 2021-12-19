interface msdyn_productinventory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_bin?: string | null;
  msdyn_internalflags?: string | null;
  msdyn_name?: string | null;
  msdyn_productinventoryid?: string | null;
  msdyn_qtyallocated?: number | null;
  msdyn_qtyavailable?: number | null;
  msdyn_qtyonhand?: number | null;
  msdyn_qtyonorder?: number | null;
  msdyn_reorderpoint?: number | null;
  msdyn_row?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_productinventory_statecode | null;
  statuscode?: msdyn_productinventory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_productinventory_Relationships {
  msdyn_productinventory_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_productinventory_Annotations?: Annotation_Result[] | null;
  msdyn_productinventory_Appointments?: Appointment_Result[] | null;
  msdyn_productinventory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_productinventory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_productinventory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_productinventory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_productinventory_Emails?: Email_Result[] | null;
  msdyn_productinventory_Faxes?: Fax_Result[] | null;
  msdyn_productinventory_Letters?: Letter_Result[] | null;
  msdyn_productinventory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_productinventory_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_productinventory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_productinventory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_productinventory_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_productinventory_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_productinventory_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_productinventory_SyncErrors?: SyncError_Result[] | null;
  msdyn_productinventory_Tasks?: Task_Result[] | null;
  msdyn_productinventory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_productinventory_connections1?: Connection_Result[] | null;
  msdyn_productinventory_connections2?: Connection_Result[] | null;
  msdyn_productinventory_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_productinventory_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_productinventory_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_productinventory_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_productinventory_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_productinventory_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_productinventory_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_productinventory_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_productinventory extends msdyn_productinventory_Base, msdyn_productinventory_Relationships {
  msdyn_product_bind$products?: string | null;
  msdyn_unit_bind$uoms?: string | null;
  msdyn_warehouse_bind$msdyn_warehouses?: string | null;
}
interface msdyn_productinventory_Create extends msdyn_productinventory {
}
interface msdyn_productinventory_Update extends msdyn_productinventory {
}
interface msdyn_productinventory_Select {
  createdby_guid: WebAttribute<msdyn_productinventory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_productinventory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_productinventory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_productinventory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_productinventory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_productinventory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_productinventory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bin: WebAttribute<msdyn_productinventory_Select, { msdyn_bin: string | null }, {  }>;
  msdyn_internalflags: WebAttribute<msdyn_productinventory_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_productinventory_Select, { msdyn_name: string | null }, {  }>;
  msdyn_product_guid: WebAttribute<msdyn_productinventory_Select, { msdyn_product_guid: string | null }, { msdyn_product_formatted?: string }>;
  msdyn_productinventoryid: WebAttribute<msdyn_productinventory_Select, { msdyn_productinventoryid: string | null }, {  }>;
  msdyn_qtyallocated: WebAttribute<msdyn_productinventory_Select, { msdyn_qtyallocated: number | null }, {  }>;
  msdyn_qtyavailable: WebAttribute<msdyn_productinventory_Select, { msdyn_qtyavailable: number | null }, {  }>;
  msdyn_qtyonhand: WebAttribute<msdyn_productinventory_Select, { msdyn_qtyonhand: number | null }, {  }>;
  msdyn_qtyonorder: WebAttribute<msdyn_productinventory_Select, { msdyn_qtyonorder: number | null }, {  }>;
  msdyn_reorderpoint: WebAttribute<msdyn_productinventory_Select, { msdyn_reorderpoint: number | null }, {  }>;
  msdyn_row: WebAttribute<msdyn_productinventory_Select, { msdyn_row: string | null }, {  }>;
  msdyn_unit_guid: WebAttribute<msdyn_productinventory_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_warehouse_guid: WebAttribute<msdyn_productinventory_Select, { msdyn_warehouse_guid: string | null }, { msdyn_warehouse_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_productinventory_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_productinventory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_productinventory_Select, { statecode: msdyn_productinventory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_productinventory_Select, { statuscode: msdyn_productinventory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_productinventory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_productinventory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_productinventory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_productinventory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bin: string;
  msdyn_internalflags: string;
  msdyn_name: string;
  msdyn_product_guid: XQW.Guid;
  msdyn_productinventoryid: XQW.Guid;
  msdyn_qtyallocated: number;
  msdyn_qtyavailable: number;
  msdyn_qtyonhand: number;
  msdyn_qtyonorder: number;
  msdyn_reorderpoint: number;
  msdyn_row: string;
  msdyn_unit_guid: XQW.Guid;
  msdyn_warehouse_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_productinventory_statecode;
  statuscode: msdyn_productinventory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_productinventory_Expand {
  createdby: WebExpand<msdyn_productinventory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_productinventory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_productinventory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_productinventory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_product: WebExpand<msdyn_productinventory_Expand, Product_Select, Product_Filter, { msdyn_product: Product_Result }>;
  msdyn_productinventory_ActivityPointers: WebExpand<msdyn_productinventory_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_productinventory_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_productinventory_Annotations: WebExpand<msdyn_productinventory_Expand, Annotation_Select, Annotation_Filter, { msdyn_productinventory_Annotations: Annotation_Result[] }>;
  msdyn_productinventory_Appointments: WebExpand<msdyn_productinventory_Expand, Appointment_Select, Appointment_Filter, { msdyn_productinventory_Appointments: Appointment_Result[] }>;
  msdyn_productinventory_AsyncOperations: WebExpand<msdyn_productinventory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_productinventory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_productinventory_BulkDeleteFailures: WebExpand<msdyn_productinventory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_productinventory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_productinventory_DuplicateBaseRecord: WebExpand<msdyn_productinventory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productinventory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_productinventory_DuplicateMatchingRecord: WebExpand<msdyn_productinventory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productinventory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_productinventory_Emails: WebExpand<msdyn_productinventory_Expand, Email_Select, Email_Filter, { msdyn_productinventory_Emails: Email_Result[] }>;
  msdyn_productinventory_Faxes: WebExpand<msdyn_productinventory_Expand, Fax_Select, Fax_Filter, { msdyn_productinventory_Faxes: Fax_Result[] }>;
  msdyn_productinventory_Letters: WebExpand<msdyn_productinventory_Expand, Letter_Select, Letter_Filter, { msdyn_productinventory_Letters: Letter_Result[] }>;
  msdyn_productinventory_MailboxTrackingFolders: WebExpand<msdyn_productinventory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_productinventory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_productinventory_PhoneCalls: WebExpand<msdyn_productinventory_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_productinventory_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_productinventory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_productinventory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_productinventory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_productinventory_ProcessSession: WebExpand<msdyn_productinventory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_productinventory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_productinventory_RecurringAppointmentMasters: WebExpand<msdyn_productinventory_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_productinventory_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_productinventory_ServiceAppointments: WebExpand<msdyn_productinventory_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_productinventory_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_productinventory_SocialActivities: WebExpand<msdyn_productinventory_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_productinventory_SocialActivities: SocialActivity_Result[] }>;
  msdyn_productinventory_SyncErrors: WebExpand<msdyn_productinventory_Expand, SyncError_Select, SyncError_Filter, { msdyn_productinventory_SyncErrors: SyncError_Result[] }>;
  msdyn_productinventory_Tasks: WebExpand<msdyn_productinventory_Expand, Task_Select, Task_Filter, { msdyn_productinventory_Tasks: Task_Result[] }>;
  msdyn_productinventory_UserEntityInstanceDatas: WebExpand<msdyn_productinventory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_productinventory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_productinventory_connections1: WebExpand<msdyn_productinventory_Expand, Connection_Select, Connection_Filter, { msdyn_productinventory_connections1: Connection_Result[] }>;
  msdyn_productinventory_connections2: WebExpand<msdyn_productinventory_Expand, Connection_Select, Connection_Filter, { msdyn_productinventory_connections2: Connection_Result[] }>;
  msdyn_productinventory_msdyn_approvals: WebExpand<msdyn_productinventory_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_productinventory_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_productinventory_msdyn_bookingalerts: WebExpand<msdyn_productinventory_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_productinventory_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_productinventory_msdyn_ocliveworkitems: WebExpand<msdyn_productinventory_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_productinventory_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_productinventory_msdyn_ocoutboundmessages: WebExpand<msdyn_productinventory_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_productinventory_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_productinventory_msdyn_ocsessions: WebExpand<msdyn_productinventory_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_productinventory_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_productinventory_msfp_alerts: WebExpand<msdyn_productinventory_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_productinventory_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_productinventory_msfp_surveyinvites: WebExpand<msdyn_productinventory_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_productinventory_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_productinventory_msfp_surveyresponses: WebExpand<msdyn_productinventory_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_productinventory_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_unit: WebExpand<msdyn_productinventory_Expand, UoM_Select, UoM_Filter, { msdyn_unit: UoM_Result }>;
  msdyn_warehouse: WebExpand<msdyn_productinventory_Expand, msdyn_warehouse_Select, msdyn_warehouse_Filter, { msdyn_warehouse: msdyn_warehouse_Result }>;
  organizationid: WebExpand<msdyn_productinventory_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_productinventory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_product_formatted?: string;
  msdyn_unit_formatted?: string;
  msdyn_warehouse_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_productinventory_Result extends msdyn_productinventory_Base, msdyn_productinventory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_product_guid: string | null;
  msdyn_unit_guid: string | null;
  msdyn_warehouse_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_productinventory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_product: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  msdyn_warehouse: WebMappingRetrieve<msdyn_warehouse_Select,msdyn_warehouse_Expand,msdyn_warehouse_Filter,msdyn_warehouse_Fixed,msdyn_warehouse_Result,msdyn_warehouse_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_productinventory_RelatedMany {
  msdyn_productinventory_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_productinventory_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_productinventory_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_productinventory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_productinventory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_productinventory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productinventory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productinventory_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_productinventory_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_productinventory_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_productinventory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_productinventory_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_productinventory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_productinventory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_productinventory_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_productinventory_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_productinventory_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_productinventory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_productinventory_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_productinventory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_productinventory_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_productinventory_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_productinventory_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_productinventory_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_productinventory_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_productinventory_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_productinventory_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_productinventory_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_productinventory_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_productinventory_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_productinventories: WebMappingRetrieve<msdyn_productinventory_Select,msdyn_productinventory_Expand,msdyn_productinventory_Filter,msdyn_productinventory_Fixed,msdyn_productinventory_Result,msdyn_productinventory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_productinventories: WebMappingRelated<msdyn_productinventory_RelatedOne,msdyn_productinventory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_productinventories: WebMappingCUDA<msdyn_productinventory_Create,msdyn_productinventory_Update,msdyn_productinventory_Select>;
}
