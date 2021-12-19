interface msdyn_agreementinvoiceproduct_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_agreementinvoiceproductid?: string | null;
  msdyn_lineorder?: number | null;
  msdyn_name?: string | null;
  msdyn_quantity?: number | null;
  msdyn_unitamount?: number | null;
  msdyn_unitamount_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_agreementinvoiceproduct_statecode | null;
  statuscode?: msdyn_agreementinvoiceproduct_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_agreementinvoiceproduct_Relationships {
  msdyn_agreementinvoiceproduct_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_agreementinvoiceproduct_Annotations?: Annotation_Result[] | null;
  msdyn_agreementinvoiceproduct_Appointments?: Appointment_Result[] | null;
  msdyn_agreementinvoiceproduct_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_agreementinvoiceproduct_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_agreementinvoiceproduct_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementinvoiceproduct_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementinvoiceproduct_Emails?: Email_Result[] | null;
  msdyn_agreementinvoiceproduct_Faxes?: Fax_Result[] | null;
  msdyn_agreementinvoiceproduct_Letters?: Letter_Result[] | null;
  msdyn_agreementinvoiceproduct_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_agreementinvoiceproduct_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_agreementinvoiceproduct_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_agreementinvoiceproduct_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_agreementinvoiceproduct_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_agreementinvoiceproduct_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_agreementinvoiceproduct_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_agreementinvoiceproduct_SyncErrors?: SyncError_Result[] | null;
  msdyn_agreementinvoiceproduct_Tasks?: Task_Result[] | null;
  msdyn_agreementinvoiceproduct_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_agreementinvoiceproduct_connections1?: Connection_Result[] | null;
  msdyn_agreementinvoiceproduct_connections2?: Connection_Result[] | null;
  msdyn_agreementinvoiceproduct_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_agreementinvoiceproduct_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_agreementinvoiceproduct_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_agreementinvoiceproduct_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_agreementinvoiceproduct_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_agreementinvoiceproduct_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_agreementinvoiceproduct_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_agreementinvoiceproduct_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  msdyn_msdyn_agreementinvoiceproduct_invoicedetail_AgreementInvoiceProduct?: InvoiceDetail_Result[] | null;
}
interface msdyn_agreementinvoiceproduct extends msdyn_agreementinvoiceproduct_Base, msdyn_agreementinvoiceproduct_Relationships {
  msdyn_agreement_bind$msdyn_agreements?: string | null;
  msdyn_agreementinvoicesetup_bind$msdyn_agreementinvoicesetups?: string | null;
  msdyn_pricelist_bind$pricelevels?: string | null;
  msdyn_product_bind$products?: string | null;
  msdyn_unit_bind$uoms?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_agreementinvoiceproduct_Create extends msdyn_agreementinvoiceproduct {
}
interface msdyn_agreementinvoiceproduct_Update extends msdyn_agreementinvoiceproduct {
}
interface msdyn_agreementinvoiceproduct_Select {
  createdby_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_agreementinvoiceproduct_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_agreementinvoiceproduct_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_agreementinvoiceproduct_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_agreementinvoiceproduct_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_agreement_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_agreement_guid: string | null }, { msdyn_agreement_formatted?: string }>;
  msdyn_agreementinvoiceproductid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_agreementinvoiceproductid: string | null }, {  }>;
  msdyn_agreementinvoicesetup_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_agreementinvoicesetup_guid: string | null }, { msdyn_agreementinvoicesetup_formatted?: string }>;
  msdyn_lineorder: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_lineorder: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_name: string | null }, {  }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_product_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_product_guid: string | null }, { msdyn_product_formatted?: string }>;
  msdyn_quantity: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_quantity: number | null }, {  }>;
  msdyn_unit_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_unitamount: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_unitamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unitamount_base: WebAttribute<msdyn_agreementinvoiceproduct_Select, { msdyn_unitamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_agreementinvoiceproduct_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_agreementinvoiceproduct_Select, { statecode: msdyn_agreementinvoiceproduct_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_agreementinvoiceproduct_Select, { statuscode: msdyn_agreementinvoiceproduct_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_agreementinvoiceproduct_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_agreementinvoiceproduct_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_agreementinvoiceproduct_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_agreementinvoiceproduct_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_agreementinvoiceproduct_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_agreement_guid: XQW.Guid;
  msdyn_agreementinvoiceproductid: XQW.Guid;
  msdyn_agreementinvoicesetup_guid: XQW.Guid;
  msdyn_lineorder: number;
  msdyn_name: string;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_product_guid: XQW.Guid;
  msdyn_quantity: number;
  msdyn_unit_guid: XQW.Guid;
  msdyn_unitamount: number;
  msdyn_unitamount_base: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_agreementinvoiceproduct_statecode;
  statuscode: msdyn_agreementinvoiceproduct_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_agreementinvoiceproduct_Expand {
  createdby: WebExpand<msdyn_agreementinvoiceproduct_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_agreementinvoiceproduct_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_agreementinvoiceproduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_agreementinvoiceproduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_agreement: WebExpand<msdyn_agreementinvoiceproduct_Expand, msdyn_agreement_Select, msdyn_agreement_Filter, { msdyn_agreement: msdyn_agreement_Result }>;
  msdyn_agreementinvoiceproduct_ActivityPointers: WebExpand<msdyn_agreementinvoiceproduct_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_agreementinvoiceproduct_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_agreementinvoiceproduct_Annotations: WebExpand<msdyn_agreementinvoiceproduct_Expand, Annotation_Select, Annotation_Filter, { msdyn_agreementinvoiceproduct_Annotations: Annotation_Result[] }>;
  msdyn_agreementinvoiceproduct_Appointments: WebExpand<msdyn_agreementinvoiceproduct_Expand, Appointment_Select, Appointment_Filter, { msdyn_agreementinvoiceproduct_Appointments: Appointment_Result[] }>;
  msdyn_agreementinvoiceproduct_AsyncOperations: WebExpand<msdyn_agreementinvoiceproduct_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_agreementinvoiceproduct_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_agreementinvoiceproduct_BulkDeleteFailures: WebExpand<msdyn_agreementinvoiceproduct_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_agreementinvoiceproduct_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_agreementinvoiceproduct_DuplicateBaseRecord: WebExpand<msdyn_agreementinvoiceproduct_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementinvoiceproduct_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementinvoiceproduct_DuplicateMatchingRecord: WebExpand<msdyn_agreementinvoiceproduct_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementinvoiceproduct_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementinvoiceproduct_Emails: WebExpand<msdyn_agreementinvoiceproduct_Expand, Email_Select, Email_Filter, { msdyn_agreementinvoiceproduct_Emails: Email_Result[] }>;
  msdyn_agreementinvoiceproduct_Faxes: WebExpand<msdyn_agreementinvoiceproduct_Expand, Fax_Select, Fax_Filter, { msdyn_agreementinvoiceproduct_Faxes: Fax_Result[] }>;
  msdyn_agreementinvoiceproduct_Letters: WebExpand<msdyn_agreementinvoiceproduct_Expand, Letter_Select, Letter_Filter, { msdyn_agreementinvoiceproduct_Letters: Letter_Result[] }>;
  msdyn_agreementinvoiceproduct_MailboxTrackingFolders: WebExpand<msdyn_agreementinvoiceproduct_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_agreementinvoiceproduct_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_agreementinvoiceproduct_PhoneCalls: WebExpand<msdyn_agreementinvoiceproduct_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_agreementinvoiceproduct_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_agreementinvoiceproduct_PrincipalObjectAttributeAccesses: WebExpand<msdyn_agreementinvoiceproduct_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_agreementinvoiceproduct_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_agreementinvoiceproduct_ProcessSession: WebExpand<msdyn_agreementinvoiceproduct_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_agreementinvoiceproduct_ProcessSession: ProcessSession_Result[] }>;
  msdyn_agreementinvoiceproduct_RecurringAppointmentMasters: WebExpand<msdyn_agreementinvoiceproduct_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_agreementinvoiceproduct_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_agreementinvoiceproduct_ServiceAppointments: WebExpand<msdyn_agreementinvoiceproduct_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_agreementinvoiceproduct_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_agreementinvoiceproduct_SocialActivities: WebExpand<msdyn_agreementinvoiceproduct_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_agreementinvoiceproduct_SocialActivities: SocialActivity_Result[] }>;
  msdyn_agreementinvoiceproduct_SyncErrors: WebExpand<msdyn_agreementinvoiceproduct_Expand, SyncError_Select, SyncError_Filter, { msdyn_agreementinvoiceproduct_SyncErrors: SyncError_Result[] }>;
  msdyn_agreementinvoiceproduct_Tasks: WebExpand<msdyn_agreementinvoiceproduct_Expand, Task_Select, Task_Filter, { msdyn_agreementinvoiceproduct_Tasks: Task_Result[] }>;
  msdyn_agreementinvoiceproduct_UserEntityInstanceDatas: WebExpand<msdyn_agreementinvoiceproduct_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_agreementinvoiceproduct_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_agreementinvoiceproduct_connections1: WebExpand<msdyn_agreementinvoiceproduct_Expand, Connection_Select, Connection_Filter, { msdyn_agreementinvoiceproduct_connections1: Connection_Result[] }>;
  msdyn_agreementinvoiceproduct_connections2: WebExpand<msdyn_agreementinvoiceproduct_Expand, Connection_Select, Connection_Filter, { msdyn_agreementinvoiceproduct_connections2: Connection_Result[] }>;
  msdyn_agreementinvoiceproduct_msdyn_approvals: WebExpand<msdyn_agreementinvoiceproduct_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_agreementinvoiceproduct_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_agreementinvoiceproduct_msdyn_bookingalerts: WebExpand<msdyn_agreementinvoiceproduct_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_agreementinvoiceproduct_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_agreementinvoiceproduct_msdyn_ocliveworkitems: WebExpand<msdyn_agreementinvoiceproduct_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_agreementinvoiceproduct_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_agreementinvoiceproduct_msdyn_ocoutboundmessages: WebExpand<msdyn_agreementinvoiceproduct_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_agreementinvoiceproduct_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_agreementinvoiceproduct_msdyn_ocsessions: WebExpand<msdyn_agreementinvoiceproduct_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_agreementinvoiceproduct_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_agreementinvoiceproduct_msfp_alerts: WebExpand<msdyn_agreementinvoiceproduct_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_agreementinvoiceproduct_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_agreementinvoiceproduct_msfp_surveyinvites: WebExpand<msdyn_agreementinvoiceproduct_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_agreementinvoiceproduct_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_agreementinvoiceproduct_msfp_surveyresponses: WebExpand<msdyn_agreementinvoiceproduct_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_agreementinvoiceproduct_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_agreementinvoicesetup: WebExpand<msdyn_agreementinvoiceproduct_Expand, msdyn_agreementinvoicesetup_Select, msdyn_agreementinvoicesetup_Filter, { msdyn_agreementinvoicesetup: msdyn_agreementinvoicesetup_Result }>;
  msdyn_msdyn_agreementinvoiceproduct_invoicedetail_AgreementInvoiceProduct: WebExpand<msdyn_agreementinvoiceproduct_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { msdyn_msdyn_agreementinvoiceproduct_invoicedetail_AgreementInvoiceProduct: InvoiceDetail_Result[] }>;
  msdyn_pricelist: WebExpand<msdyn_agreementinvoiceproduct_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_pricelist: PriceLevel_Result }>;
  msdyn_product: WebExpand<msdyn_agreementinvoiceproduct_Expand, Product_Select, Product_Filter, { msdyn_product: Product_Result }>;
  msdyn_unit: WebExpand<msdyn_agreementinvoiceproduct_Expand, UoM_Select, UoM_Filter, { msdyn_unit: UoM_Result }>;
  ownerid: WebExpand<msdyn_agreementinvoiceproduct_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_agreementinvoiceproduct_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_agreementinvoiceproduct_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_agreementinvoiceproduct_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_agreementinvoiceproduct_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_agreementinvoiceproduct_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agreement_formatted?: string;
  msdyn_agreementinvoicesetup_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_product_formatted?: string;
  msdyn_unit_formatted?: string;
  msdyn_unitamount_base_formatted?: string;
  msdyn_unitamount_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_agreementinvoiceproduct_Result extends msdyn_agreementinvoiceproduct_Base, msdyn_agreementinvoiceproduct_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agreement_guid: string | null;
  msdyn_agreementinvoicesetup_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_product_guid: string | null;
  msdyn_unit_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_agreementinvoiceproduct_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_agreement: WebMappingRetrieve<msdyn_agreement_Select,msdyn_agreement_Expand,msdyn_agreement_Filter,msdyn_agreement_Fixed,msdyn_agreement_Result,msdyn_agreement_FormattedResult>;
  msdyn_agreementinvoicesetup: WebMappingRetrieve<msdyn_agreementinvoicesetup_Select,msdyn_agreementinvoicesetup_Expand,msdyn_agreementinvoicesetup_Filter,msdyn_agreementinvoicesetup_Fixed,msdyn_agreementinvoicesetup_Result,msdyn_agreementinvoicesetup_FormattedResult>;
  msdyn_pricelist: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_product: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_agreementinvoiceproduct_RelatedMany {
  msdyn_agreementinvoiceproduct_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_agreementinvoiceproduct_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_agreementinvoiceproduct_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_agreementinvoiceproduct_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_agreementinvoiceproduct_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_agreementinvoiceproduct_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementinvoiceproduct_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementinvoiceproduct_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_agreementinvoiceproduct_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_agreementinvoiceproduct_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_agreementinvoiceproduct_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_agreementinvoiceproduct_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_agreementinvoiceproduct_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_agreementinvoiceproduct_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_agreementinvoiceproduct_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_agreementinvoiceproduct_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_agreementinvoiceproduct_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_agreementinvoiceproduct_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_agreementinvoiceproduct_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_agreementinvoiceproduct_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_agreementinvoiceproduct_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementinvoiceproduct_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementinvoiceproduct_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_agreementinvoiceproduct_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_agreementinvoiceproduct_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_agreementinvoiceproduct_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_agreementinvoiceproduct_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_agreementinvoiceproduct_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_agreementinvoiceproduct_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_agreementinvoiceproduct_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  msdyn_msdyn_agreementinvoiceproduct_invoicedetail_AgreementInvoiceProduct: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_agreementinvoiceproducts: WebMappingRetrieve<msdyn_agreementinvoiceproduct_Select,msdyn_agreementinvoiceproduct_Expand,msdyn_agreementinvoiceproduct_Filter,msdyn_agreementinvoiceproduct_Fixed,msdyn_agreementinvoiceproduct_Result,msdyn_agreementinvoiceproduct_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_agreementinvoiceproducts: WebMappingRelated<msdyn_agreementinvoiceproduct_RelatedOne,msdyn_agreementinvoiceproduct_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_agreementinvoiceproducts: WebMappingCUDA<msdyn_agreementinvoiceproduct_Create,msdyn_agreementinvoiceproduct_Update,msdyn_agreementinvoiceproduct_Select>;
}
