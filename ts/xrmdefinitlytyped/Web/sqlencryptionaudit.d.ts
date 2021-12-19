interface SqlEncryptionAudit_Base extends WebEntity {
  createdon?: Date | null;
}
interface SqlEncryptionAudit_Relationships {
}
interface SqlEncryptionAudit extends SqlEncryptionAudit_Base, SqlEncryptionAudit_Relationships {
}
interface SqlEncryptionAudit_Create extends SqlEncryptionAudit {
}
interface SqlEncryptionAudit_Update extends SqlEncryptionAudit {
}
interface SqlEncryptionAudit_Select {
  createdby_guid: WebAttribute<SqlEncryptionAudit_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SqlEncryptionAudit_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
}
interface SqlEncryptionAudit_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
}
interface SqlEncryptionAudit_Expand {
}
interface SqlEncryptionAudit_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
}
interface SqlEncryptionAudit_Result extends SqlEncryptionAudit_Base, SqlEncryptionAudit_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
}
interface SqlEncryptionAudit_RelatedOne {
}
interface SqlEncryptionAudit_RelatedMany {
}
interface WebEntitiesRetrieve {
  sqlencryptionaudits: WebMappingRetrieve<SqlEncryptionAudit_Select,SqlEncryptionAudit_Expand,SqlEncryptionAudit_Filter,SqlEncryptionAudit_Fixed,SqlEncryptionAudit_Result,SqlEncryptionAudit_FormattedResult>;
}
interface WebEntitiesRelated {
  sqlencryptionaudits: WebMappingRelated<SqlEncryptionAudit_RelatedOne,SqlEncryptionAudit_RelatedMany>;
}
interface WebEntitiesCUDA {
  sqlencryptionaudits: WebMappingCUDA<SqlEncryptionAudit_Create,SqlEncryptionAudit_Update,SqlEncryptionAudit_Select>;
}
