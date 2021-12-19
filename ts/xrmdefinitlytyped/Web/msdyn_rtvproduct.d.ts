interface msdyn_rtvproduct_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_lineorder?: number | null;
  msdyn_name?: string | null;
  msdyn_quantity?: number | null;
  msdyn_rtvproductid?: string | null;
  msdyn_totalcreditamount?: number | null;
  msdyn_totalcreditamount_base?: number | null;
  msdyn_unitcreditamount?: number | null;
  msdyn_unitcreditamount_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_rtvproduct_statecode | null;
  statuscode?: msdyn_rtvproduct_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_rtvproduct_Relationships {
  msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct?: msdyn_rmareceiptproduct_Result[] | null;
  msdyn_rtvproduct_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_rtvproduct_Annotations?: Annotation_Result[] | null;
  msdyn_rtvproduct_Appointments?: Appointment_Result[] | null;
  msdyn_rtvproduct_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_rtvproduct_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_rtvproduct_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_rtvproduct_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_rtvproduct_Emails?: Email_Result[] | null;
  msdyn_rtvproduct_Faxes?: Fax_Result[] | null;
  msdyn_rtvproduct_Letters?: Letter_Result[] | null;
  msdyn_rtvproduct_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_rtvproduct_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_rtvproduct_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_rtvproduct_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_rtvproduct_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_rtvproduct_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_rtvproduct_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_rtvproduct_SyncErrors?: SyncError_Result[] | null;
  msdyn_rtvproduct_Tasks?: Task_Result[] | null;
  msdyn_rtvproduct_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_rtvproduct_connections1?: Connection_Result[] | null;
  msdyn_rtvproduct_connections2?: Connection_Result[] | null;
  msdyn_rtvproduct_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_rtvproduct_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_rtvproduct_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_rtvproduct_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_rtvproduct_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_rtvproduct_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_rtvproduct_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_rtvproduct_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_rtvproduct extends msdyn_rtvproduct_Base, msdyn_rtvproduct_Relationships {
  msdyn_product_bind$products?: string | null;
  msdyn_rma_bind$msdyn_rmas?: string | null;
  msdyn_rmaproduct_bind$msdyn_rmaproducts?: string | null;
  msdyn_rtv_bind$msdyn_rtvs?: string | null;
  msdyn_unit_bind$uoms?: string | null;
  msdyn_warehouse_bind$msdyn_warehouses?: string | null;
  msdyn_workorder_bind$msdyn_workorders?: string | null;
  msdyn_workorderproduct_bind$msdyn_workorderproducts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_rtvproduct_Create extends msdyn_rtvproduct {
}
interface msdyn_rtvproduct_Update extends msdyn_rtvproduct {
}
interface msdyn_rtvproduct_Select {
  createdby_guid: WebAttribute<msdyn_rtvproduct_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_rtvproduct_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_rtvproduct_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_rtvproduct_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_rtvproduct_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_rtvproduct_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_rtvproduct_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_rtvproduct_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_rtvproduct_Select, { msdyn_description: string | null }, {  }>;
  msdyn_lineorder: WebAttribute<msdyn_rtvproduct_Select, { msdyn_lineorder: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_rtvproduct_Select, { msdyn_name: string | null }, {  }>;
  msdyn_product_guid: WebAttribute<msdyn_rtvproduct_Select, { msdyn_product_guid: string | null }, { msdyn_product_formatted?: string }>;
  msdyn_quantity: WebAttribute<msdyn_rtvproduct_Select, { msdyn_quantity: number | null }, {  }>;
  msdyn_rma_guid: WebAttribute<msdyn_rtvproduct_Select, { msdyn_rma_guid: string | null }, { msdyn_rma_formatted?: string }>;
  msdyn_rmaproduct_guid: WebAttribute<msdyn_rtvproduct_Select, { msdyn_rmaproduct_guid: string | null }, { msdyn_rmaproduct_formatted?: string }>;
  msdyn_rtv_guid: WebAttribute<msdyn_rtvproduct_Select, { msdyn_rtv_guid: string | null }, { msdyn_rtv_formatted?: string }>;
  msdyn_rtvproductid: WebAttribute<msdyn_rtvproduct_Select, { msdyn_rtvproductid: string | null }, {  }>;
  msdyn_totalcreditamount: WebAttribute<msdyn_rtvproduct_Select, { msdyn_totalcreditamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalcreditamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_totalcreditamount_base: WebAttribute<msdyn_rtvproduct_Select, { msdyn_totalcreditamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalcreditamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unit_guid: WebAttribute<msdyn_rtvproduct_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_unitcreditamount: WebAttribute<msdyn_rtvproduct_Select, { msdyn_unitcreditamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitcreditamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unitcreditamount_base: WebAttribute<msdyn_rtvproduct_Select, { msdyn_unitcreditamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitcreditamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_warehouse_guid: WebAttribute<msdyn_rtvproduct_Select, { msdyn_warehouse_guid: string | null }, { msdyn_warehouse_formatted?: string }>;
  msdyn_workorder_guid: WebAttribute<msdyn_rtvproduct_Select, { msdyn_workorder_guid: string | null }, { msdyn_workorder_formatted?: string }>;
  msdyn_workorderproduct_guid: WebAttribute<msdyn_rtvproduct_Select, { msdyn_workorderproduct_guid: string | null }, { msdyn_workorderproduct_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_rtvproduct_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_rtvproduct_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_rtvproduct_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_rtvproduct_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_rtvproduct_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_rtvproduct_Select, { statecode: msdyn_rtvproduct_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_rtvproduct_Select, { statuscode: msdyn_rtvproduct_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_rtvproduct_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_rtvproduct_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_rtvproduct_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_rtvproduct_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_rtvproduct_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_lineorder: number;
  msdyn_name: string;
  msdyn_product_guid: XQW.Guid;
  msdyn_quantity: number;
  msdyn_rma_guid: XQW.Guid;
  msdyn_rmaproduct_guid: XQW.Guid;
  msdyn_rtv_guid: XQW.Guid;
  msdyn_rtvproductid: XQW.Guid;
  msdyn_totalcreditamount: number;
  msdyn_totalcreditamount_base: number;
  msdyn_unit_guid: XQW.Guid;
  msdyn_unitcreditamount: number;
  msdyn_unitcreditamount_base: number;
  msdyn_warehouse_guid: XQW.Guid;
  msdyn_workorder_guid: XQW.Guid;
  msdyn_workorderproduct_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_rtvproduct_statecode;
  statuscode: msdyn_rtvproduct_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_rtvproduct_Expand {
  createdby: WebExpand<msdyn_rtvproduct_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_rtvproduct_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_rtvproduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_rtvproduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct: WebExpand<msdyn_rtvproduct_Expand, msdyn_rmareceiptproduct_Select, msdyn_rmareceiptproduct_Filter, { msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct: msdyn_rmareceiptproduct_Result[] }>;
  msdyn_product: WebExpand<msdyn_rtvproduct_Expand, Product_Select, Product_Filter, { msdyn_product: Product_Result }>;
  msdyn_rma: WebExpand<msdyn_rtvproduct_Expand, msdyn_rma_Select, msdyn_rma_Filter, { msdyn_rma: msdyn_rma_Result }>;
  msdyn_rmaproduct: WebExpand<msdyn_rtvproduct_Expand, msdyn_rmaproduct_Select, msdyn_rmaproduct_Filter, { msdyn_rmaproduct: msdyn_rmaproduct_Result }>;
  msdyn_rtv: WebExpand<msdyn_rtvproduct_Expand, msdyn_rtv_Select, msdyn_rtv_Filter, { msdyn_rtv: msdyn_rtv_Result }>;
  msdyn_rtvproduct_ActivityPointers: WebExpand<msdyn_rtvproduct_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_rtvproduct_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_rtvproduct_Annotations: WebExpand<msdyn_rtvproduct_Expand, Annotation_Select, Annotation_Filter, { msdyn_rtvproduct_Annotations: Annotation_Result[] }>;
  msdyn_rtvproduct_Appointments: WebExpand<msdyn_rtvproduct_Expand, Appointment_Select, Appointment_Filter, { msdyn_rtvproduct_Appointments: Appointment_Result[] }>;
  msdyn_rtvproduct_AsyncOperations: WebExpand<msdyn_rtvproduct_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_rtvproduct_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_rtvproduct_BulkDeleteFailures: WebExpand<msdyn_rtvproduct_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_rtvproduct_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_rtvproduct_DuplicateBaseRecord: WebExpand<msdyn_rtvproduct_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_rtvproduct_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_rtvproduct_DuplicateMatchingRecord: WebExpand<msdyn_rtvproduct_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_rtvproduct_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_rtvproduct_Emails: WebExpand<msdyn_rtvproduct_Expand, Email_Select, Email_Filter, { msdyn_rtvproduct_Emails: Email_Result[] }>;
  msdyn_rtvproduct_Faxes: WebExpand<msdyn_rtvproduct_Expand, Fax_Select, Fax_Filter, { msdyn_rtvproduct_Faxes: Fax_Result[] }>;
  msdyn_rtvproduct_Letters: WebExpand<msdyn_rtvproduct_Expand, Letter_Select, Letter_Filter, { msdyn_rtvproduct_Letters: Letter_Result[] }>;
  msdyn_rtvproduct_MailboxTrackingFolders: WebExpand<msdyn_rtvproduct_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_rtvproduct_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_rtvproduct_PhoneCalls: WebExpand<msdyn_rtvproduct_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_rtvproduct_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_rtvproduct_PrincipalObjectAttributeAccesses: WebExpand<msdyn_rtvproduct_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_rtvproduct_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_rtvproduct_ProcessSession: WebExpand<msdyn_rtvproduct_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_rtvproduct_ProcessSession: ProcessSession_Result[] }>;
  msdyn_rtvproduct_RecurringAppointmentMasters: WebExpand<msdyn_rtvproduct_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_rtvproduct_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_rtvproduct_ServiceAppointments: WebExpand<msdyn_rtvproduct_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_rtvproduct_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_rtvproduct_SocialActivities: WebExpand<msdyn_rtvproduct_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_rtvproduct_SocialActivities: SocialActivity_Result[] }>;
  msdyn_rtvproduct_SyncErrors: WebExpand<msdyn_rtvproduct_Expand, SyncError_Select, SyncError_Filter, { msdyn_rtvproduct_SyncErrors: SyncError_Result[] }>;
  msdyn_rtvproduct_Tasks: WebExpand<msdyn_rtvproduct_Expand, Task_Select, Task_Filter, { msdyn_rtvproduct_Tasks: Task_Result[] }>;
  msdyn_rtvproduct_UserEntityInstanceDatas: WebExpand<msdyn_rtvproduct_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_rtvproduct_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_rtvproduct_connections1: WebExpand<msdyn_rtvproduct_Expand, Connection_Select, Connection_Filter, { msdyn_rtvproduct_connections1: Connection_Result[] }>;
  msdyn_rtvproduct_connections2: WebExpand<msdyn_rtvproduct_Expand, Connection_Select, Connection_Filter, { msdyn_rtvproduct_connections2: Connection_Result[] }>;
  msdyn_rtvproduct_msdyn_approvals: WebExpand<msdyn_rtvproduct_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_rtvproduct_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_rtvproduct_msdyn_bookingalerts: WebExpand<msdyn_rtvproduct_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_rtvproduct_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_rtvproduct_msdyn_ocliveworkitems: WebExpand<msdyn_rtvproduct_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_rtvproduct_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_rtvproduct_msdyn_ocoutboundmessages: WebExpand<msdyn_rtvproduct_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_rtvproduct_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_rtvproduct_msdyn_ocsessions: WebExpand<msdyn_rtvproduct_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_rtvproduct_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_rtvproduct_msfp_alerts: WebExpand<msdyn_rtvproduct_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_rtvproduct_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_rtvproduct_msfp_surveyinvites: WebExpand<msdyn_rtvproduct_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_rtvproduct_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_rtvproduct_msfp_surveyresponses: WebExpand<msdyn_rtvproduct_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_rtvproduct_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_unit: WebExpand<msdyn_rtvproduct_Expand, UoM_Select, UoM_Filter, { msdyn_unit: UoM_Result }>;
  msdyn_warehouse: WebExpand<msdyn_rtvproduct_Expand, msdyn_warehouse_Select, msdyn_warehouse_Filter, { msdyn_warehouse: msdyn_warehouse_Result }>;
  msdyn_workorder: WebExpand<msdyn_rtvproduct_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_workorder: msdyn_workorder_Result }>;
  msdyn_workorderproduct: WebExpand<msdyn_rtvproduct_Expand, msdyn_workorderproduct_Select, msdyn_workorderproduct_Filter, { msdyn_workorderproduct: msdyn_workorderproduct_Result }>;
  ownerid: WebExpand<msdyn_rtvproduct_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_rtvproduct_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_rtvproduct_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_rtvproduct_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_rtvproduct_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_rtvproduct_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_product_formatted?: string;
  msdyn_rma_formatted?: string;
  msdyn_rmaproduct_formatted?: string;
  msdyn_rtv_formatted?: string;
  msdyn_totalcreditamount_base_formatted?: string;
  msdyn_totalcreditamount_formatted?: string;
  msdyn_unit_formatted?: string;
  msdyn_unitcreditamount_base_formatted?: string;
  msdyn_unitcreditamount_formatted?: string;
  msdyn_warehouse_formatted?: string;
  msdyn_workorder_formatted?: string;
  msdyn_workorderproduct_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_rtvproduct_Result extends msdyn_rtvproduct_Base, msdyn_rtvproduct_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_product_guid: string | null;
  msdyn_rma_guid: string | null;
  msdyn_rmaproduct_guid: string | null;
  msdyn_rtv_guid: string | null;
  msdyn_unit_guid: string | null;
  msdyn_warehouse_guid: string | null;
  msdyn_workorder_guid: string | null;
  msdyn_workorderproduct_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_rtvproduct_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_product: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_rma: WebMappingRetrieve<msdyn_rma_Select,msdyn_rma_Expand,msdyn_rma_Filter,msdyn_rma_Fixed,msdyn_rma_Result,msdyn_rma_FormattedResult>;
  msdyn_rmaproduct: WebMappingRetrieve<msdyn_rmaproduct_Select,msdyn_rmaproduct_Expand,msdyn_rmaproduct_Filter,msdyn_rmaproduct_Fixed,msdyn_rmaproduct_Result,msdyn_rmaproduct_FormattedResult>;
  msdyn_rtv: WebMappingRetrieve<msdyn_rtv_Select,msdyn_rtv_Expand,msdyn_rtv_Filter,msdyn_rtv_Fixed,msdyn_rtv_Result,msdyn_rtv_FormattedResult>;
  msdyn_unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  msdyn_warehouse: WebMappingRetrieve<msdyn_warehouse_Select,msdyn_warehouse_Expand,msdyn_warehouse_Filter,msdyn_warehouse_Fixed,msdyn_warehouse_Result,msdyn_warehouse_FormattedResult>;
  msdyn_workorder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_workorderproduct: WebMappingRetrieve<msdyn_workorderproduct_Select,msdyn_workorderproduct_Expand,msdyn_workorderproduct_Filter,msdyn_workorderproduct_Fixed,msdyn_workorderproduct_Result,msdyn_workorderproduct_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_rtvproduct_RelatedMany {
  msdyn_msdyn_rtvproduct_msdyn_rmareceiptproduct_RTVProduct: WebMappingRetrieve<msdyn_rmareceiptproduct_Select,msdyn_rmareceiptproduct_Expand,msdyn_rmareceiptproduct_Filter,msdyn_rmareceiptproduct_Fixed,msdyn_rmareceiptproduct_Result,msdyn_rmareceiptproduct_FormattedResult>;
  msdyn_rtvproduct_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_rtvproduct_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_rtvproduct_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_rtvproduct_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_rtvproduct_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_rtvproduct_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_rtvproduct_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_rtvproduct_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_rtvproduct_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_rtvproduct_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_rtvproduct_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_rtvproduct_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_rtvproduct_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_rtvproduct_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_rtvproduct_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_rtvproduct_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_rtvproduct_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_rtvproduct_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_rtvproduct_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_rtvproduct_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_rtvproduct_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_rtvproduct_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_rtvproduct_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_rtvproduct_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_rtvproduct_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_rtvproduct_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_rtvproduct_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_rtvproduct_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_rtvproduct_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_rtvproduct_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_rtvproducts: WebMappingRetrieve<msdyn_rtvproduct_Select,msdyn_rtvproduct_Expand,msdyn_rtvproduct_Filter,msdyn_rtvproduct_Fixed,msdyn_rtvproduct_Result,msdyn_rtvproduct_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_rtvproducts: WebMappingRelated<msdyn_rtvproduct_RelatedOne,msdyn_rtvproduct_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_rtvproducts: WebMappingCUDA<msdyn_rtvproduct_Create,msdyn_rtvproduct_Update,msdyn_rtvproduct_Select>;
}
