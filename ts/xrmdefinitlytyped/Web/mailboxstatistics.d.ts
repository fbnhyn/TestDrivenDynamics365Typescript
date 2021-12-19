interface MailboxStatistics_Base extends WebEntity {
  asynceventid?: string | null;
  crmitemsbacklog?: number | null;
  individualstepdurations?: string | null;
  itemsfailed?: number | null;
  itemsprocessed?: number | null;
  machinename?: string | null;
  mailboxprocesscompletedon?: Date | null;
  mailboxprocessscheduledon?: Date | null;
  mailboxprocessstartedon?: Date | null;
  mailboxstatisticsid?: string | null;
  operationtypeid?: mailboxstatistics_operationtype | null;
  processresult?: boolean | null;
  processtimeintervalinminutes?: number | null;
  scheduledtimeintervalinminutes?: number | null;
}
interface MailboxStatistics_Relationships {
}
interface MailboxStatistics extends MailboxStatistics_Base, MailboxStatistics_Relationships {
}
interface MailboxStatistics_Create extends MailboxStatistics {
}
interface MailboxStatistics_Update extends MailboxStatistics {
}
interface MailboxStatistics_Select {
  asynceventid: WebAttribute<MailboxStatistics_Select, { asynceventid: string | null }, {  }>;
  crmitemsbacklog: WebAttribute<MailboxStatistics_Select, { crmitemsbacklog: number | null }, {  }>;
  individualstepdurations: WebAttribute<MailboxStatistics_Select, { individualstepdurations: string | null }, {  }>;
  itemsfailed: WebAttribute<MailboxStatistics_Select, { itemsfailed: number | null }, {  }>;
  itemsprocessed: WebAttribute<MailboxStatistics_Select, { itemsprocessed: number | null }, {  }>;
  machinename: WebAttribute<MailboxStatistics_Select, { machinename: string | null }, {  }>;
  mailboxid_guid: WebAttribute<MailboxStatistics_Select, { mailboxid_guid: string | null }, { mailboxid_formatted?: string }>;
  mailboxprocesscompletedon: WebAttribute<MailboxStatistics_Select, { mailboxprocesscompletedon: Date | null }, { mailboxprocesscompletedon_formatted?: string }>;
  mailboxprocessscheduledon: WebAttribute<MailboxStatistics_Select, { mailboxprocessscheduledon: Date | null }, { mailboxprocessscheduledon_formatted?: string }>;
  mailboxprocessstartedon: WebAttribute<MailboxStatistics_Select, { mailboxprocessstartedon: Date | null }, { mailboxprocessstartedon_formatted?: string }>;
  mailboxstatisticsid: WebAttribute<MailboxStatistics_Select, { mailboxstatisticsid: string | null }, {  }>;
  operationtypeid: WebAttribute<MailboxStatistics_Select, { operationtypeid: mailboxstatistics_operationtype | null }, { operationtypeid_formatted?: string }>;
  organizationid_guid: WebAttribute<MailboxStatistics_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  processresult: WebAttribute<MailboxStatistics_Select, { processresult: boolean | null }, {  }>;
  processtimeintervalinminutes: WebAttribute<MailboxStatistics_Select, { processtimeintervalinminutes: number | null }, {  }>;
  scheduledtimeintervalinminutes: WebAttribute<MailboxStatistics_Select, { scheduledtimeintervalinminutes: number | null }, {  }>;
}
interface MailboxStatistics_Filter {
  asynceventid: XQW.Guid;
  crmitemsbacklog: number;
  individualstepdurations: string;
  itemsfailed: number;
  itemsprocessed: number;
  machinename: string;
  mailboxid_guid: XQW.Guid;
  mailboxprocesscompletedon: Date;
  mailboxprocessscheduledon: Date;
  mailboxprocessstartedon: Date;
  mailboxstatisticsid: XQW.Guid;
  operationtypeid: mailboxstatistics_operationtype;
  organizationid_guid: XQW.Guid;
  processresult: boolean;
  processtimeintervalinminutes: number;
  scheduledtimeintervalinminutes: number;
}
interface MailboxStatistics_Expand {
  mailboxid: WebExpand<MailboxStatistics_Expand, Mailbox_Select, Mailbox_Filter, { mailboxid: Mailbox_Result }>;
  organizationid: WebExpand<MailboxStatistics_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface MailboxStatistics_FormattedResult {
  mailboxid_formatted?: string;
  mailboxprocesscompletedon_formatted?: string;
  mailboxprocessscheduledon_formatted?: string;
  mailboxprocessstartedon_formatted?: string;
  operationtypeid_formatted?: string;
  organizationid_formatted?: string;
}
interface MailboxStatistics_Result extends MailboxStatistics_Base, MailboxStatistics_Relationships {
  "@odata.etag": string;
  mailboxid_guid: string | null;
  organizationid_guid: string | null;
}
interface MailboxStatistics_RelatedOne {
  mailboxid: WebMappingRetrieve<Mailbox_Select,Mailbox_Expand,Mailbox_Filter,Mailbox_Fixed,Mailbox_Result,Mailbox_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface MailboxStatistics_RelatedMany {
}
interface WebEntitiesRetrieve {
  mailboxstatistics: WebMappingRetrieve<MailboxStatistics_Select,MailboxStatistics_Expand,MailboxStatistics_Filter,MailboxStatistics_Fixed,MailboxStatistics_Result,MailboxStatistics_FormattedResult>;
}
interface WebEntitiesRelated {
  mailboxstatistics: WebMappingRelated<MailboxStatistics_RelatedOne,MailboxStatistics_RelatedMany>;
}
interface WebEntitiesCUDA {
  mailboxstatistics: WebMappingCUDA<MailboxStatistics_Create,MailboxStatistics_Update,MailboxStatistics_Select>;
}
