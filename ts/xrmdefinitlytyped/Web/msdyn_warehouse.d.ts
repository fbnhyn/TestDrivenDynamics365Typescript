interface msdyn_warehouse_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_name?: string | null;
  msdyn_warehouseid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_warehouse_statecode | null;
  statuscode?: msdyn_warehouse_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_warehouse_Relationships {
  msdyn_msdyn_warehouse_bookableresource_Warehouse?: BookableResource_Result[] | null;
  msdyn_msdyn_warehouse_businessunit_Warehouse?: BusinessUnit_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_actual_Warehouse?: msdyn_actual_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse?: msdyn_fieldservicesetting_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse?: msdyn_inventoryadjustment_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse?: msdyn_inventoryjournal_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse?: msdyn_inventorytransfer_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse?: msdyn_inventorytransfer_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse?: msdyn_productinventory_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse?: msdyn_purchaseorder_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse?: msdyn_purchaseorderproduct_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse?: msdyn_purchaseorderreceiptproduct_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse?: msdyn_rmaproduct_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse?: msdyn_rtvproduct_Result[] | null;
  msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse?: msdyn_workorderproduct_Result[] | null;
  msdyn_warehouse_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_warehouse_Annotations?: Annotation_Result[] | null;
  msdyn_warehouse_Appointments?: Appointment_Result[] | null;
  msdyn_warehouse_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_warehouse_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_warehouse_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_warehouse_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_warehouse_Emails?: Email_Result[] | null;
  msdyn_warehouse_Faxes?: Fax_Result[] | null;
  msdyn_warehouse_Letters?: Letter_Result[] | null;
  msdyn_warehouse_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_warehouse_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_warehouse_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_warehouse_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_warehouse_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_warehouse_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_warehouse_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_warehouse_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_warehouse_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_warehouse_SyncErrors?: SyncError_Result[] | null;
  msdyn_warehouse_Tasks?: Task_Result[] | null;
  msdyn_warehouse_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_warehouse_connections1?: Connection_Result[] | null;
  msdyn_warehouse_connections2?: Connection_Result[] | null;
  msdyn_warehouse_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_warehouse_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_warehouse_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_warehouse_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_warehouse_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_warehouse_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_warehouse_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_warehouse_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_warehouse extends msdyn_warehouse_Base, msdyn_warehouse_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_warehouse_Create extends msdyn_warehouse {
}
interface msdyn_warehouse_Update extends msdyn_warehouse {
}
interface msdyn_warehouse_Select {
  createdby_guid: WebAttribute<msdyn_warehouse_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_warehouse_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_warehouse_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_warehouse_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_warehouse_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_warehouse_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_warehouse_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_warehouse_Select, { msdyn_description: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_warehouse_Select, { msdyn_name: string | null }, {  }>;
  msdyn_warehouseid: WebAttribute<msdyn_warehouse_Select, { msdyn_warehouseid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_warehouse_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_warehouse_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_warehouse_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_warehouse_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_warehouse_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_warehouse_Select, { statecode: msdyn_warehouse_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_warehouse_Select, { statuscode: msdyn_warehouse_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_warehouse_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_warehouse_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_warehouse_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_warehouse_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_name: string;
  msdyn_warehouseid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_warehouse_statecode;
  statuscode: msdyn_warehouse_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_warehouse_Expand {
  createdby: WebExpand<msdyn_warehouse_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_warehouse_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_warehouse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_warehouse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_warehouse_bookableresource_Warehouse: WebExpand<msdyn_warehouse_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_msdyn_warehouse_bookableresource_Warehouse: BookableResource_Result[] }>;
  msdyn_msdyn_warehouse_businessunit_Warehouse: WebExpand<msdyn_warehouse_Expand, BusinessUnit_Select, BusinessUnit_Filter, { msdyn_msdyn_warehouse_businessunit_Warehouse: BusinessUnit_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_actual_Warehouse: WebExpand<msdyn_warehouse_Expand, msdyn_actual_Select, msdyn_actual_Filter, { msdyn_msdyn_warehouse_msdyn_actual_Warehouse: msdyn_actual_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse: WebExpand<msdyn_warehouse_Expand, msdyn_fieldservicesetting_Select, msdyn_fieldservicesetting_Filter, { msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse: msdyn_fieldservicesetting_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse: WebExpand<msdyn_warehouse_Expand, msdyn_inventoryadjustment_Select, msdyn_inventoryadjustment_Filter, { msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse: msdyn_inventoryadjustment_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse: WebExpand<msdyn_warehouse_Expand, msdyn_inventoryjournal_Select, msdyn_inventoryjournal_Filter, { msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse: msdyn_inventoryjournal_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse: WebExpand<msdyn_warehouse_Expand, msdyn_inventorytransfer_Select, msdyn_inventorytransfer_Filter, { msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse: msdyn_inventorytransfer_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse: WebExpand<msdyn_warehouse_Expand, msdyn_inventorytransfer_Select, msdyn_inventorytransfer_Filter, { msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse: msdyn_inventorytransfer_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse: WebExpand<msdyn_warehouse_Expand, msdyn_productinventory_Select, msdyn_productinventory_Filter, { msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse: msdyn_productinventory_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse: WebExpand<msdyn_warehouse_Expand, msdyn_purchaseorder_Select, msdyn_purchaseorder_Filter, { msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse: msdyn_purchaseorder_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse: WebExpand<msdyn_warehouse_Expand, msdyn_purchaseorderproduct_Select, msdyn_purchaseorderproduct_Filter, { msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse: msdyn_purchaseorderproduct_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse: WebExpand<msdyn_warehouse_Expand, msdyn_purchaseorderreceiptproduct_Select, msdyn_purchaseorderreceiptproduct_Filter, { msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse: msdyn_purchaseorderreceiptproduct_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse: WebExpand<msdyn_warehouse_Expand, msdyn_rmaproduct_Select, msdyn_rmaproduct_Filter, { msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse: msdyn_rmaproduct_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse: WebExpand<msdyn_warehouse_Expand, msdyn_rtvproduct_Select, msdyn_rtvproduct_Filter, { msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse: msdyn_rtvproduct_Result[] }>;
  msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse: WebExpand<msdyn_warehouse_Expand, msdyn_workorderproduct_Select, msdyn_workorderproduct_Filter, { msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse: msdyn_workorderproduct_Result[] }>;
  msdyn_warehouse_ActivityPointers: WebExpand<msdyn_warehouse_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_warehouse_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_warehouse_Annotations: WebExpand<msdyn_warehouse_Expand, Annotation_Select, Annotation_Filter, { msdyn_warehouse_Annotations: Annotation_Result[] }>;
  msdyn_warehouse_Appointments: WebExpand<msdyn_warehouse_Expand, Appointment_Select, Appointment_Filter, { msdyn_warehouse_Appointments: Appointment_Result[] }>;
  msdyn_warehouse_AsyncOperations: WebExpand<msdyn_warehouse_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_warehouse_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_warehouse_BulkDeleteFailures: WebExpand<msdyn_warehouse_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_warehouse_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_warehouse_DuplicateBaseRecord: WebExpand<msdyn_warehouse_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_warehouse_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_warehouse_DuplicateMatchingRecord: WebExpand<msdyn_warehouse_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_warehouse_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_warehouse_Emails: WebExpand<msdyn_warehouse_Expand, Email_Select, Email_Filter, { msdyn_warehouse_Emails: Email_Result[] }>;
  msdyn_warehouse_Faxes: WebExpand<msdyn_warehouse_Expand, Fax_Select, Fax_Filter, { msdyn_warehouse_Faxes: Fax_Result[] }>;
  msdyn_warehouse_Letters: WebExpand<msdyn_warehouse_Expand, Letter_Select, Letter_Filter, { msdyn_warehouse_Letters: Letter_Result[] }>;
  msdyn_warehouse_MailboxTrackingFolders: WebExpand<msdyn_warehouse_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_warehouse_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_warehouse_PhoneCalls: WebExpand<msdyn_warehouse_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_warehouse_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_warehouse_PrincipalObjectAttributeAccesses: WebExpand<msdyn_warehouse_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_warehouse_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_warehouse_ProcessSession: WebExpand<msdyn_warehouse_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_warehouse_ProcessSession: ProcessSession_Result[] }>;
  msdyn_warehouse_RecurringAppointmentMasters: WebExpand<msdyn_warehouse_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_warehouse_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_warehouse_ServiceAppointments: WebExpand<msdyn_warehouse_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_warehouse_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_warehouse_SharePointDocumentLocations: WebExpand<msdyn_warehouse_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_warehouse_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_warehouse_SharePointDocuments: WebExpand<msdyn_warehouse_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_warehouse_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_warehouse_SocialActivities: WebExpand<msdyn_warehouse_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_warehouse_SocialActivities: SocialActivity_Result[] }>;
  msdyn_warehouse_SyncErrors: WebExpand<msdyn_warehouse_Expand, SyncError_Select, SyncError_Filter, { msdyn_warehouse_SyncErrors: SyncError_Result[] }>;
  msdyn_warehouse_Tasks: WebExpand<msdyn_warehouse_Expand, Task_Select, Task_Filter, { msdyn_warehouse_Tasks: Task_Result[] }>;
  msdyn_warehouse_UserEntityInstanceDatas: WebExpand<msdyn_warehouse_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_warehouse_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_warehouse_connections1: WebExpand<msdyn_warehouse_Expand, Connection_Select, Connection_Filter, { msdyn_warehouse_connections1: Connection_Result[] }>;
  msdyn_warehouse_connections2: WebExpand<msdyn_warehouse_Expand, Connection_Select, Connection_Filter, { msdyn_warehouse_connections2: Connection_Result[] }>;
  msdyn_warehouse_msdyn_approvals: WebExpand<msdyn_warehouse_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_warehouse_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_warehouse_msdyn_bookingalerts: WebExpand<msdyn_warehouse_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_warehouse_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_warehouse_msdyn_ocliveworkitems: WebExpand<msdyn_warehouse_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_warehouse_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_warehouse_msdyn_ocoutboundmessages: WebExpand<msdyn_warehouse_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_warehouse_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_warehouse_msdyn_ocsessions: WebExpand<msdyn_warehouse_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_warehouse_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_warehouse_msfp_alerts: WebExpand<msdyn_warehouse_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_warehouse_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_warehouse_msfp_surveyinvites: WebExpand<msdyn_warehouse_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_warehouse_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_warehouse_msfp_surveyresponses: WebExpand<msdyn_warehouse_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_warehouse_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  ownerid: WebExpand<msdyn_warehouse_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_warehouse_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_warehouse_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_warehouse_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_warehouse_FormattedResult {
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
interface msdyn_warehouse_Result extends msdyn_warehouse_Base, msdyn_warehouse_Relationships {
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
interface msdyn_warehouse_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_warehouse_RelatedMany {
  msdyn_msdyn_warehouse_bookableresource_Warehouse: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_msdyn_warehouse_businessunit_Warehouse: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_actual_Warehouse: WebMappingRetrieve<msdyn_actual_Select,msdyn_actual_Expand,msdyn_actual_Filter,msdyn_actual_Fixed,msdyn_actual_Result,msdyn_actual_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_fieldservicesetting_DefaultWarehouse: WebMappingRetrieve<msdyn_fieldservicesetting_Select,msdyn_fieldservicesetting_Expand,msdyn_fieldservicesetting_Filter,msdyn_fieldservicesetting_Fixed,msdyn_fieldservicesetting_Result,msdyn_fieldservicesetting_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_inventoryadjustment_Warehouse: WebMappingRetrieve<msdyn_inventoryadjustment_Select,msdyn_inventoryadjustment_Expand,msdyn_inventoryadjustment_Filter,msdyn_inventoryadjustment_Fixed,msdyn_inventoryadjustment_Result,msdyn_inventoryadjustment_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_inventoryjournal_Warehouse: WebMappingRetrieve<msdyn_inventoryjournal_Select,msdyn_inventoryjournal_Expand,msdyn_inventoryjournal_Filter,msdyn_inventoryjournal_Fixed,msdyn_inventoryjournal_Result,msdyn_inventoryjournal_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_inventorytransfer_DestinationWarehouse: WebMappingRetrieve<msdyn_inventorytransfer_Select,msdyn_inventorytransfer_Expand,msdyn_inventorytransfer_Filter,msdyn_inventorytransfer_Fixed,msdyn_inventorytransfer_Result,msdyn_inventorytransfer_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_inventorytransfer_SourceWarehouse: WebMappingRetrieve<msdyn_inventorytransfer_Select,msdyn_inventorytransfer_Expand,msdyn_inventorytransfer_Filter,msdyn_inventorytransfer_Fixed,msdyn_inventorytransfer_Result,msdyn_inventorytransfer_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_productinventory_Warehouse: WebMappingRetrieve<msdyn_productinventory_Select,msdyn_productinventory_Expand,msdyn_productinventory_Filter,msdyn_productinventory_Fixed,msdyn_productinventory_Result,msdyn_productinventory_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_purchaseorder_ReceivetoWarehouse: WebMappingRetrieve<msdyn_purchaseorder_Select,msdyn_purchaseorder_Expand,msdyn_purchaseorder_Filter,msdyn_purchaseorder_Fixed,msdyn_purchaseorder_Result,msdyn_purchaseorder_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_purchaseorderproduct_AssociateToWarehouse: WebMappingRetrieve<msdyn_purchaseorderproduct_Select,msdyn_purchaseorderproduct_Expand,msdyn_purchaseorderproduct_Filter,msdyn_purchaseorderproduct_Fixed,msdyn_purchaseorderproduct_Result,msdyn_purchaseorderproduct_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_purchaseorderreceiptproduct_AssociateToWarehouse: WebMappingRetrieve<msdyn_purchaseorderreceiptproduct_Select,msdyn_purchaseorderreceiptproduct_Expand,msdyn_purchaseorderreceiptproduct_Filter,msdyn_purchaseorderreceiptproduct_Fixed,msdyn_purchaseorderreceiptproduct_Result,msdyn_purchaseorderreceiptproduct_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_rmaproduct_ReturntoWarehouse: WebMappingRetrieve<msdyn_rmaproduct_Select,msdyn_rmaproduct_Expand,msdyn_rmaproduct_Filter,msdyn_rmaproduct_Fixed,msdyn_rmaproduct_Result,msdyn_rmaproduct_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_rtvproduct_Warehouse: WebMappingRetrieve<msdyn_rtvproduct_Select,msdyn_rtvproduct_Expand,msdyn_rtvproduct_Filter,msdyn_rtvproduct_Fixed,msdyn_rtvproduct_Result,msdyn_rtvproduct_FormattedResult>;
  msdyn_msdyn_warehouse_msdyn_workorderproduct_Warehouse: WebMappingRetrieve<msdyn_workorderproduct_Select,msdyn_workorderproduct_Expand,msdyn_workorderproduct_Filter,msdyn_workorderproduct_Fixed,msdyn_workorderproduct_Result,msdyn_workorderproduct_FormattedResult>;
  msdyn_warehouse_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_warehouse_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_warehouse_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_warehouse_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_warehouse_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_warehouse_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_warehouse_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_warehouse_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_warehouse_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_warehouse_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_warehouse_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_warehouse_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_warehouse_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_warehouse_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_warehouse_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_warehouse_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_warehouse_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_warehouse_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_warehouse_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_warehouse_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_warehouse_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_warehouse_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_warehouse_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_warehouse_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_warehouse_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_warehouse_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_warehouse_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_warehouse_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_warehouse_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_warehouse_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_warehouse_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_warehouse_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_warehouses: WebMappingRetrieve<msdyn_warehouse_Select,msdyn_warehouse_Expand,msdyn_warehouse_Filter,msdyn_warehouse_Fixed,msdyn_warehouse_Result,msdyn_warehouse_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_warehouses: WebMappingRelated<msdyn_warehouse_RelatedOne,msdyn_warehouse_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_warehouses: WebMappingCUDA<msdyn_warehouse_Create,msdyn_warehouse_Update,msdyn_warehouse_Select>;
}
