interface OrderClose_Base extends WebEntity {
  activityadditionalparams?: string | null;
  activityid?: string | null;
  activitytypecode?: string | null;
  actualdurationminutes?: number | null;
  actualend?: Date | null;
  actualstart?: Date | null;
  category?: string | null;
  community?: socialprofile_community | null;
  createdon?: Date | null;
  deliverylastattemptedon?: Date | null;
  deliveryprioritycode?: activitypointer_deliveryprioritycode | null;
  description?: string | null;
  exchangeitemid?: string | null;
  exchangerate?: number | null;
  exchangeweblink?: string | null;
  importsequencenumber?: number | null;
  instancetypecode?: _orderclose_instancetypecode | null;
  isbilled?: boolean | null;
  ismapiprivate?: boolean | null;
  isregularactivity?: boolean | null;
  isworkflowcreated?: boolean | null;
  lastonholdtime?: Date | null;
  leftvoicemail?: boolean | null;
  modifiedon?: Date | null;
  onholdtime?: number | null;
  ordernumber?: string | null;
  overriddencreatedon?: Date | null;
  postponeactivityprocessinguntil?: Date | null;
  prioritycode?: _orderclose_prioritycode | null;
  processid?: string | null;
  revision?: number | null;
  scheduleddurationminutes?: number | null;
  scheduledend?: Date | null;
  scheduledstart?: Date | null;
  senton?: Date | null;
  seriesid?: string | null;
  sortdate?: Date | null;
  stageid?: string | null;
  statecode?: orderclose_statecode | null;
  statuscode?: orderclose_statuscode | null;
  subcategory?: string | null;
  subject?: string | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface OrderClose_Relationships {
  CampaignResponse_OrderCloses?: CampaignResponse_Result[] | null;
  CreatedByExternalParty?: ExternalParty_Result | null;
  ModifiedByExternalParty?: ExternalParty_Result | null;
  OrderClose_Annotation?: Annotation_Result[] | null;
  OrderClose_AsyncOperations?: AsyncOperation_Result[] | null;
  OrderClose_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  OrderClose_SyncErrors?: SyncError_Result[] | null;
  activityid_activitypointer?: ActivityPointer_Result | null;
  createdby_orderclose?: SystemUser_Result | null;
  createdonbehalfby_orderclose?: SystemUser_Result | null;
  modifiedby_orderclose?: SystemUser_Result | null;
  modifiedonbehalfby_orderclose?: SystemUser_Result | null;
  orderclose_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  orderclose_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  orderclose_activity_parties?: ActivityParty_Result[] | null;
  ownerid_orderclose?: Team_Result | null;
  ownerid_orderclose1?: SystemUser_Result | null;
  owningbusinessunit_orderclose?: BusinessUnit_Result | null;
  owningteam_orderclose?: Team_Result | null;
  owninguser_orderclose?: SystemUser_Result | null;
  regardingobjectid_account_orderclose?: Account_Result | null;
  regardingobjectid_bookableresourcebooking_orderclose?: BookableResourceBooking_Result | null;
  regardingobjectid_bookableresourcebookingheader_orderclose?: BookableResourceBookingHeader_Result | null;
  regardingobjectid_bulkoperation_orderclose?: BulkOperation_Result | null;
  regardingobjectid_campaign_orderclose?: Campaign_Result | null;
  regardingobjectid_campaignactivity_orderclose?: CampaignActivity_Result | null;
  regardingobjectid_entitlement_orderclose?: Entitlement_Result | null;
  regardingobjectid_entitlementtemplate_orderclose?: EntitlementTemplate_Result | null;
  regardingobjectid_incident_orderclose?: Incident_Result | null;
  regardingobjectid_knowledgearticle_orderclose?: KnowledgeArticle_Result | null;
  regardingobjectid_knowledgebaserecord_orderclose?: KnowledgeBaseRecord_Result | null;
  regardingobjectid_lead_orderclose?: Lead_Result | null;
  regardingobjectid_msdyn_customerasset_orderclose?: msdyn_customerasset_Result | null;
  regardingobjectid_msdyn_playbookinstance_orderclose?: msdyn_playbookinstance_Result | null;
  regardingobjectid_new_interactionforemail_orderclose?: InteractionForEmail_Result | null;
  regardingobjectid_opportunity_orderclose?: Opportunity_Result | null;
  regardingobjectid_site_orderclose?: Site_Result | null;
  sendermailboxid_orderclose?: Mailbox_Result | null;
  serviceid_orderclose?: Service_Result | null;
  sla_activitypointer_sla_orderclose?: SLA_Result | null;
  slainvokedid_activitypointer_sla_orderclose?: SLA_Result | null;
  transactioncurrencyid_orderclose?: TransactionCurrency_Result | null;
  userentityinstancedata_orderclose?: UserEntityInstanceData_Result[] | null;
}
interface OrderClose extends OrderClose_Base, OrderClose_Relationships {
  ownerid_orderclose_bind$systemusers?: string | null;
  ownerid_orderclose_bind$teams?: string | null;
  regardingobjectid_account_orderclose_bind$accounts?: string | null;
  regardingobjectid_bookableresourcebooking_orderclose_bind$bookableresourcebookings?: string | null;
  regardingobjectid_bookableresourcebookingheader_orderclose_bind$bookableresourcebookingheaders?: string | null;
  regardingobjectid_bulkoperation_orderclose_bind$bulkoperations?: string | null;
  regardingobjectid_campaign_orderclose_bind$campaigns?: string | null;
  regardingobjectid_campaignactivity_orderclose_bind$campaignactivities?: string | null;
  regardingobjectid_entitlement_orderclose_bind$entitlements?: string | null;
  regardingobjectid_entitlementtemplate_orderclose_bind$entitlementtemplates?: string | null;
  regardingobjectid_incident_orderclose_bind$incidents?: string | null;
  regardingobjectid_knowledgearticle_orderclose_bind$knowledgearticles?: string | null;
  regardingobjectid_knowledgebaserecord_orderclose_bind$knowledgebaserecords?: string | null;
  regardingobjectid_lead_orderclose_bind$leads?: string | null;
  regardingobjectid_msdyn_customerasset_orderclose_bind$msdyn_customerassets?: string | null;
  regardingobjectid_msdyn_playbookinstance_orderclose_bind$msdyn_playbookinstances?: string | null;
  regardingobjectid_new_interactionforemail_orderclose_bind$interactionforemails?: string | null;
  regardingobjectid_opportunity_orderclose_bind$opportunities?: string | null;
  regardingobjectid_site_orderclose_bind$sites?: string | null;
  salesorderid_bind$salesorders?: string | null;
  serviceid_orderclose_bind$services?: string | null;
  sla_activitypointer_sla_orderclose_bind$slas?: string | null;
  transactioncurrencyid_orderclose_bind$transactioncurrencies?: string | null;
}
interface OrderClose_Create extends OrderClose {
  activityid_activitypointer_bind$activitypointers?: string | null;
}
interface OrderClose_Update extends OrderClose {
}
interface OrderClose_Select {
  activityadditionalparams: WebAttribute<OrderClose_Select, { activityadditionalparams: string | null }, {  }>;
  activityid: WebAttribute<OrderClose_Select, { activityid: string | null }, {  }>;
  activitytypecode: WebAttribute<OrderClose_Select, { activitytypecode: string | null }, {  }>;
  actualdurationminutes: WebAttribute<OrderClose_Select, { actualdurationminutes: number | null }, {  }>;
  actualend: WebAttribute<OrderClose_Select, { actualend: Date | null }, { actualend_formatted?: string }>;
  actualstart: WebAttribute<OrderClose_Select, { actualstart: Date | null }, { actualstart_formatted?: string }>;
  bcc_guid: WebAttribute<OrderClose_Select, { bcc_guid: string | null }, { bcc_formatted?: string }>;
  category: WebAttribute<OrderClose_Select, { category: string | null }, {  }>;
  cc_guid: WebAttribute<OrderClose_Select, { cc_guid: string | null }, { cc_formatted?: string }>;
  community: WebAttribute<OrderClose_Select, { community: socialprofile_community | null }, { community_formatted?: string }>;
  createdby_guid: WebAttribute<OrderClose_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdbyexternalparty_guid: WebAttribute<OrderClose_Select, { createdbyexternalparty_guid: string | null }, { createdbyexternalparty_formatted?: string }>;
  createdon: WebAttribute<OrderClose_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<OrderClose_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customers_guid: WebAttribute<OrderClose_Select, { customers_guid: string | null }, { customers_formatted?: string }>;
  deliverylastattemptedon: WebAttribute<OrderClose_Select, { deliverylastattemptedon: Date | null }, { deliverylastattemptedon_formatted?: string }>;
  deliveryprioritycode: WebAttribute<OrderClose_Select, { deliveryprioritycode: activitypointer_deliveryprioritycode | null }, { deliveryprioritycode_formatted?: string }>;
  description: WebAttribute<OrderClose_Select, { description: string | null }, {  }>;
  exchangeitemid: WebAttribute<OrderClose_Select, { exchangeitemid: string | null }, {  }>;
  exchangerate: WebAttribute<OrderClose_Select, { exchangerate: number | null }, {  }>;
  exchangeweblink: WebAttribute<OrderClose_Select, { exchangeweblink: string | null }, {  }>;
  from_guid: WebAttribute<OrderClose_Select, { from_guid: string | null }, { from_formatted?: string }>;
  importsequencenumber: WebAttribute<OrderClose_Select, { importsequencenumber: number | null }, {  }>;
  instancetypecode: WebAttribute<OrderClose_Select, { instancetypecode: _orderclose_instancetypecode | null }, { instancetypecode_formatted?: string }>;
  isbilled: WebAttribute<OrderClose_Select, { isbilled: boolean | null }, {  }>;
  ismapiprivate: WebAttribute<OrderClose_Select, { ismapiprivate: boolean | null }, {  }>;
  isregularactivity: WebAttribute<OrderClose_Select, { isregularactivity: boolean | null }, {  }>;
  isworkflowcreated: WebAttribute<OrderClose_Select, { isworkflowcreated: boolean | null }, {  }>;
  lastonholdtime: WebAttribute<OrderClose_Select, { lastonholdtime: Date | null }, { lastonholdtime_formatted?: string }>;
  leftvoicemail: WebAttribute<OrderClose_Select, { leftvoicemail: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<OrderClose_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedbyexternalparty_guid: WebAttribute<OrderClose_Select, { modifiedbyexternalparty_guid: string | null }, { modifiedbyexternalparty_formatted?: string }>;
  modifiedon: WebAttribute<OrderClose_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<OrderClose_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  onholdtime: WebAttribute<OrderClose_Select, { onholdtime: number | null }, {  }>;
  optionalattendees_guid: WebAttribute<OrderClose_Select, { optionalattendees_guid: string | null }, { optionalattendees_formatted?: string }>;
  ordernumber: WebAttribute<OrderClose_Select, { ordernumber: string | null }, {  }>;
  organizer_guid: WebAttribute<OrderClose_Select, { organizer_guid: string | null }, { organizer_formatted?: string }>;
  overriddencreatedon: WebAttribute<OrderClose_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<OrderClose_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<OrderClose_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<OrderClose_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<OrderClose_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  partners_guid: WebAttribute<OrderClose_Select, { partners_guid: string | null }, { partners_formatted?: string }>;
  postponeactivityprocessinguntil: WebAttribute<OrderClose_Select, { postponeactivityprocessinguntil: Date | null }, { postponeactivityprocessinguntil_formatted?: string }>;
  prioritycode: WebAttribute<OrderClose_Select, { prioritycode: _orderclose_prioritycode | null }, { prioritycode_formatted?: string }>;
  processid: WebAttribute<OrderClose_Select, { processid: string | null }, {  }>;
  regardingobjectid_guid: WebAttribute<OrderClose_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  requiredattendees_guid: WebAttribute<OrderClose_Select, { requiredattendees_guid: string | null }, { requiredattendees_formatted?: string }>;
  resources_guid: WebAttribute<OrderClose_Select, { resources_guid: string | null }, { resources_formatted?: string }>;
  revision: WebAttribute<OrderClose_Select, { revision: number | null }, {  }>;
  salesorderid_guid: WebAttribute<OrderClose_Select, { salesorderid_guid: string | null }, { salesorderid_formatted?: string }>;
  scheduleddurationminutes: WebAttribute<OrderClose_Select, { scheduleddurationminutes: number | null }, {  }>;
  scheduledend: WebAttribute<OrderClose_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
  scheduledstart: WebAttribute<OrderClose_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
  sendermailboxid_guid: WebAttribute<OrderClose_Select, { sendermailboxid_guid: string | null }, { sendermailboxid_formatted?: string }>;
  senton: WebAttribute<OrderClose_Select, { senton: Date | null }, { senton_formatted?: string }>;
  seriesid: WebAttribute<OrderClose_Select, { seriesid: string | null }, {  }>;
  serviceid_guid: WebAttribute<OrderClose_Select, { serviceid_guid: string | null }, { serviceid_formatted?: string }>;
  slaid_guid: WebAttribute<OrderClose_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  slainvokedid_guid: WebAttribute<OrderClose_Select, { slainvokedid_guid: string | null }, { slainvokedid_formatted?: string }>;
  sortdate: WebAttribute<OrderClose_Select, { sortdate: Date | null }, { sortdate_formatted?: string }>;
  stageid: WebAttribute<OrderClose_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<OrderClose_Select, { statecode: orderclose_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<OrderClose_Select, { statuscode: orderclose_statuscode | null }, { statuscode_formatted?: string }>;
  subcategory: WebAttribute<OrderClose_Select, { subcategory: string | null }, {  }>;
  subject: WebAttribute<OrderClose_Select, { subject: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<OrderClose_Select, { timezoneruleversionnumber: number | null }, {  }>;
  to_guid: WebAttribute<OrderClose_Select, { to_guid: string | null }, { to_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<OrderClose_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<OrderClose_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<OrderClose_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<OrderClose_Select, { versionnumber: number | null }, {  }>;
}
interface OrderClose_Filter {
  activityadditionalparams: string;
  activityid: XQW.Guid;
  activitytypecode: string;
  actualdurationminutes: number;
  actualend: Date;
  actualstart: Date;
  bcc_guid: XQW.Guid;
  category: string;
  cc_guid: XQW.Guid;
  community: socialprofile_community;
  createdby_guid: XQW.Guid;
  createdbyexternalparty_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customers_guid: XQW.Guid;
  deliverylastattemptedon: Date;
  deliveryprioritycode: activitypointer_deliveryprioritycode;
  description: string;
  exchangeitemid: string;
  exchangerate: any;
  exchangeweblink: string;
  from_guid: XQW.Guid;
  importsequencenumber: number;
  instancetypecode: _orderclose_instancetypecode;
  isbilled: boolean;
  ismapiprivate: boolean;
  isregularactivity: boolean;
  isworkflowcreated: boolean;
  lastonholdtime: Date;
  leftvoicemail: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedbyexternalparty_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  onholdtime: number;
  optionalattendees_guid: XQW.Guid;
  ordernumber: string;
  organizer_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  partners_guid: XQW.Guid;
  postponeactivityprocessinguntil: Date;
  prioritycode: _orderclose_prioritycode;
  processid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  requiredattendees_guid: XQW.Guid;
  resources_guid: XQW.Guid;
  revision: number;
  salesorderid_guid: XQW.Guid;
  scheduleddurationminutes: number;
  scheduledend: Date;
  scheduledstart: Date;
  sendermailboxid_guid: XQW.Guid;
  senton: Date;
  seriesid: XQW.Guid;
  serviceid_guid: XQW.Guid;
  slaid_guid: XQW.Guid;
  slainvokedid_guid: XQW.Guid;
  sortdate: Date;
  stageid: XQW.Guid;
  statecode: orderclose_statecode;
  statuscode: orderclose_statuscode;
  subcategory: string;
  subject: string;
  timezoneruleversionnumber: number;
  to_guid: XQW.Guid;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface OrderClose_Expand {
  CampaignResponse_OrderCloses: WebExpand<OrderClose_Expand, CampaignResponse_Select, CampaignResponse_Filter, { CampaignResponse_OrderCloses: CampaignResponse_Result[] }>;
  CreatedByExternalParty: WebExpand<OrderClose_Expand, ExternalParty_Select, ExternalParty_Filter, { CreatedByExternalParty: ExternalParty_Result }>;
  ModifiedByExternalParty: WebExpand<OrderClose_Expand, ExternalParty_Select, ExternalParty_Filter, { ModifiedByExternalParty: ExternalParty_Result }>;
  OrderClose_Annotation: WebExpand<OrderClose_Expand, Annotation_Select, Annotation_Filter, { OrderClose_Annotation: Annotation_Result[] }>;
  OrderClose_AsyncOperations: WebExpand<OrderClose_Expand, AsyncOperation_Select, AsyncOperation_Filter, { OrderClose_AsyncOperations: AsyncOperation_Result[] }>;
  OrderClose_BulkDeleteFailures: WebExpand<OrderClose_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { OrderClose_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  OrderClose_SyncErrors: WebExpand<OrderClose_Expand, SyncError_Select, SyncError_Filter, { OrderClose_SyncErrors: SyncError_Result[] }>;
  activityid_activitypointer: WebExpand<OrderClose_Expand, ActivityPointer_Select, ActivityPointer_Filter, { activityid_activitypointer: ActivityPointer_Result }>;
  createdby_orderclose: WebExpand<OrderClose_Expand, SystemUser_Select, SystemUser_Filter, { createdby_orderclose: SystemUser_Result }>;
  createdonbehalfby_orderclose: WebExpand<OrderClose_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby_orderclose: SystemUser_Result }>;
  modifiedby_orderclose: WebExpand<OrderClose_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby_orderclose: SystemUser_Result }>;
  modifiedonbehalfby_orderclose: WebExpand<OrderClose_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby_orderclose: SystemUser_Result }>;
  orderclose_MailboxTrackingFolders: WebExpand<OrderClose_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { orderclose_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  orderclose_PrincipalObjectAttributeAccesses: WebExpand<OrderClose_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { orderclose_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  orderclose_activity_parties: WebExpand<OrderClose_Expand, ActivityParty_Select, ActivityParty_Filter, { orderclose_activity_parties: ActivityParty_Result[] }>;
  ownerid_orderclose: WebExpand<OrderClose_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid_orderclose: SystemUser_Result } & { ownerid_orderclose: Team_Result }>;
  owningbusinessunit_orderclose: WebExpand<OrderClose_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit_orderclose: BusinessUnit_Result }>;
  owningteam_orderclose: WebExpand<OrderClose_Expand, Team_Select, Team_Filter, { owningteam_orderclose: Team_Result }>;
  owninguser_orderclose: WebExpand<OrderClose_Expand, SystemUser_Select, SystemUser_Filter, { owninguser_orderclose: SystemUser_Result }>;
  regardingobjectid_account_orderclose: WebExpand<OrderClose_Expand, Account_Select, Account_Filter, { regardingobjectid_account_orderclose: Account_Result }>;
  regardingobjectid_bookableresourcebooking_orderclose: WebExpand<OrderClose_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { regardingobjectid_bookableresourcebooking_orderclose: BookableResourceBooking_Result }>;
  regardingobjectid_bookableresourcebookingheader_orderclose: WebExpand<OrderClose_Expand, BookableResourceBookingHeader_Select, BookableResourceBookingHeader_Filter, { regardingobjectid_bookableresourcebookingheader_orderclose: BookableResourceBookingHeader_Result }>;
  regardingobjectid_bulkoperation_orderclose: WebExpand<OrderClose_Expand, BulkOperation_Select, BulkOperation_Filter, { regardingobjectid_bulkoperation_orderclose: BulkOperation_Result }>;
  regardingobjectid_campaign_orderclose: WebExpand<OrderClose_Expand, Campaign_Select, Campaign_Filter, { regardingobjectid_campaign_orderclose: Campaign_Result }>;
  regardingobjectid_campaignactivity_orderclose: WebExpand<OrderClose_Expand, CampaignActivity_Select, CampaignActivity_Filter, { regardingobjectid_campaignactivity_orderclose: CampaignActivity_Result }>;
  regardingobjectid_entitlement_orderclose: WebExpand<OrderClose_Expand, Entitlement_Select, Entitlement_Filter, { regardingobjectid_entitlement_orderclose: Entitlement_Result }>;
  regardingobjectid_entitlementtemplate_orderclose: WebExpand<OrderClose_Expand, EntitlementTemplate_Select, EntitlementTemplate_Filter, { regardingobjectid_entitlementtemplate_orderclose: EntitlementTemplate_Result }>;
  regardingobjectid_incident_orderclose: WebExpand<OrderClose_Expand, Incident_Select, Incident_Filter, { regardingobjectid_incident_orderclose: Incident_Result }>;
  regardingobjectid_knowledgearticle_orderclose: WebExpand<OrderClose_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { regardingobjectid_knowledgearticle_orderclose: KnowledgeArticle_Result }>;
  regardingobjectid_knowledgebaserecord_orderclose: WebExpand<OrderClose_Expand, KnowledgeBaseRecord_Select, KnowledgeBaseRecord_Filter, { regardingobjectid_knowledgebaserecord_orderclose: KnowledgeBaseRecord_Result }>;
  regardingobjectid_lead_orderclose: WebExpand<OrderClose_Expand, Lead_Select, Lead_Filter, { regardingobjectid_lead_orderclose: Lead_Result }>;
  regardingobjectid_msdyn_customerasset_orderclose: WebExpand<OrderClose_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { regardingobjectid_msdyn_customerasset_orderclose: msdyn_customerasset_Result }>;
  regardingobjectid_msdyn_playbookinstance_orderclose: WebExpand<OrderClose_Expand, msdyn_playbookinstance_Select, msdyn_playbookinstance_Filter, { regardingobjectid_msdyn_playbookinstance_orderclose: msdyn_playbookinstance_Result }>;
  regardingobjectid_new_interactionforemail_orderclose: WebExpand<OrderClose_Expand, InteractionForEmail_Select, InteractionForEmail_Filter, { regardingobjectid_new_interactionforemail_orderclose: InteractionForEmail_Result }>;
  regardingobjectid_opportunity_orderclose: WebExpand<OrderClose_Expand, Opportunity_Select, Opportunity_Filter, { regardingobjectid_opportunity_orderclose: Opportunity_Result }>;
  regardingobjectid_site_orderclose: WebExpand<OrderClose_Expand, Site_Select, Site_Filter, { regardingobjectid_site_orderclose: Site_Result }>;
  salesorderid: WebExpand<OrderClose_Expand, SalesOrder_Select, SalesOrder_Filter, { salesorderid: SalesOrder_Result }>;
  sendermailboxid_orderclose: WebExpand<OrderClose_Expand, Mailbox_Select, Mailbox_Filter, { sendermailboxid_orderclose: Mailbox_Result }>;
  serviceid_orderclose: WebExpand<OrderClose_Expand, Service_Select, Service_Filter, { serviceid_orderclose: Service_Result }>;
  sla_activitypointer_sla_orderclose: WebExpand<OrderClose_Expand, SLA_Select, SLA_Filter, { sla_activitypointer_sla_orderclose: SLA_Result }>;
  slainvokedid_activitypointer_sla_orderclose: WebExpand<OrderClose_Expand, SLA_Select, SLA_Filter, { slainvokedid_activitypointer_sla_orderclose: SLA_Result }>;
  transactioncurrencyid_orderclose: WebExpand<OrderClose_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid_orderclose: TransactionCurrency_Result }>;
  userentityinstancedata_orderclose: WebExpand<OrderClose_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_orderclose: UserEntityInstanceData_Result[] }>;
}
interface OrderClose_FormattedResult {
  actualend_formatted?: string;
  actualstart_formatted?: string;
  bcc_formatted?: string;
  cc_formatted?: string;
  community_formatted?: string;
  createdby_formatted?: string;
  createdbyexternalparty_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customers_formatted?: string;
  deliverylastattemptedon_formatted?: string;
  deliveryprioritycode_formatted?: string;
  from_formatted?: string;
  instancetypecode_formatted?: string;
  lastonholdtime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedbyexternalparty_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  optionalattendees_formatted?: string;
  organizer_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  partners_formatted?: string;
  postponeactivityprocessinguntil_formatted?: string;
  prioritycode_formatted?: string;
  regardingobjectid_formatted?: string;
  requiredattendees_formatted?: string;
  resources_formatted?: string;
  salesorderid_formatted?: string;
  scheduledend_formatted?: string;
  scheduledstart_formatted?: string;
  sendermailboxid_formatted?: string;
  senton_formatted?: string;
  serviceid_formatted?: string;
  slaid_formatted?: string;
  slainvokedid_formatted?: string;
  sortdate_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  to_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface OrderClose_Result extends OrderClose_Base, OrderClose_Relationships {
  "@odata.etag": string;
  bcc_guid: string | null;
  cc_guid: string | null;
  createdby_guid: string | null;
  createdbyexternalparty_guid: string | null;
  createdonbehalfby_guid: string | null;
  customers_guid: string | null;
  from_guid: string | null;
  modifiedby_guid: string | null;
  modifiedbyexternalparty_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  optionalattendees_guid: string | null;
  organizer_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  partners_guid: string | null;
  regardingobjectid_guid: string | null;
  requiredattendees_guid: string | null;
  resources_guid: string | null;
  salesorderid_guid: string | null;
  sendermailboxid_guid: string | null;
  serviceid_guid: string | null;
  slaid_guid: string | null;
  slainvokedid_guid: string | null;
  to_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface OrderClose_RelatedOne {
  CreatedByExternalParty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  ModifiedByExternalParty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  activityid_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  createdby_orderclose: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby_orderclose: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby_orderclose: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby_orderclose: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid_orderclose: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  ownerid_orderclose1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owningbusinessunit_orderclose: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam_orderclose: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser_orderclose: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regardingobjectid_account_orderclose: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_bookableresourcebooking_orderclose: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  regardingobjectid_bookableresourcebookingheader_orderclose: WebMappingRetrieve<BookableResourceBookingHeader_Select,BookableResourceBookingHeader_Expand,BookableResourceBookingHeader_Filter,BookableResourceBookingHeader_Fixed,BookableResourceBookingHeader_Result,BookableResourceBookingHeader_FormattedResult>;
  regardingobjectid_bulkoperation_orderclose: WebMappingRetrieve<BulkOperation_Select,BulkOperation_Expand,BulkOperation_Filter,BulkOperation_Fixed,BulkOperation_Result,BulkOperation_FormattedResult>;
  regardingobjectid_campaign_orderclose: WebMappingRetrieve<Campaign_Select,Campaign_Expand,Campaign_Filter,Campaign_Fixed,Campaign_Result,Campaign_FormattedResult>;
  regardingobjectid_campaignactivity_orderclose: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  regardingobjectid_entitlement_orderclose: WebMappingRetrieve<Entitlement_Select,Entitlement_Expand,Entitlement_Filter,Entitlement_Fixed,Entitlement_Result,Entitlement_FormattedResult>;
  regardingobjectid_entitlementtemplate_orderclose: WebMappingRetrieve<EntitlementTemplate_Select,EntitlementTemplate_Expand,EntitlementTemplate_Filter,EntitlementTemplate_Fixed,EntitlementTemplate_Result,EntitlementTemplate_FormattedResult>;
  regardingobjectid_incident_orderclose: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  regardingobjectid_knowledgearticle_orderclose: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  regardingobjectid_knowledgebaserecord_orderclose: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
  regardingobjectid_lead_orderclose: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  regardingobjectid_msdyn_customerasset_orderclose: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  regardingobjectid_msdyn_playbookinstance_orderclose: WebMappingRetrieve<msdyn_playbookinstance_Select,msdyn_playbookinstance_Expand,msdyn_playbookinstance_Filter,msdyn_playbookinstance_Fixed,msdyn_playbookinstance_Result,msdyn_playbookinstance_FormattedResult>;
  regardingobjectid_new_interactionforemail_orderclose: WebMappingRetrieve<InteractionForEmail_Select,InteractionForEmail_Expand,InteractionForEmail_Filter,InteractionForEmail_Fixed,InteractionForEmail_Result,InteractionForEmail_FormattedResult>;
  regardingobjectid_opportunity_orderclose: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  regardingobjectid_site_orderclose: WebMappingRetrieve<Site_Select,Site_Expand,Site_Filter,Site_Fixed,Site_Result,Site_FormattedResult>;
  salesorderid: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  sendermailboxid_orderclose: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  serviceid_orderclose: WebMappingRetrieve<Service_Select,Service_Expand,Service_Filter,Service_Fixed,Service_Result,Service_FormattedResult>;
  sla_activitypointer_sla_orderclose: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  slainvokedid_activitypointer_sla_orderclose: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  transactioncurrencyid_orderclose: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface OrderClose_RelatedMany {
  CampaignResponse_OrderCloses: WebMappingRetrieve<CampaignResponse_Select,CampaignResponse_Expand,CampaignResponse_Filter,CampaignResponse_Fixed,CampaignResponse_Result,CampaignResponse_FormattedResult>;
  OrderClose_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  OrderClose_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  OrderClose_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  OrderClose_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  orderclose_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  orderclose_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  orderclose_activity_parties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  userentityinstancedata_orderclose: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ordercloses: WebMappingRetrieve<OrderClose_Select,OrderClose_Expand,OrderClose_Filter,OrderClose_Fixed,OrderClose_Result,OrderClose_FormattedResult>;
}
interface WebEntitiesRelated {
  ordercloses: WebMappingRelated<OrderClose_RelatedOne,OrderClose_RelatedMany>;
}
interface WebEntitiesCUDA {
  ordercloses: WebMappingCUDA<OrderClose_Create,OrderClose_Update,OrderClose_Select>;
}
