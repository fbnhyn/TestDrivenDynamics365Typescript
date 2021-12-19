interface Position_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  positionid?: string | null;
  statecode?: position_statecode | null;
  statuscode?: position_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Position_Relationships {
  Position_SyncErrors?: SyncError_Result[] | null;
  position_AsyncOperations?: AsyncOperation_Result[] | null;
  position_ProcessSession?: ProcessSession_Result[] | null;
  position_connection1?: Connection_Result[] | null;
  position_connection2?: Connection_Result[] | null;
  position_parent_position?: Position_Result[] | null;
  position_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  position_users?: SystemUser_Result[] | null;
}
interface Position extends Position_Base, Position_Relationships {
  parentpositionid_bind$positions?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Position_Create extends Position {
}
interface Position_Update extends Position {
}
interface Position_Select {
  createdby_guid: WebAttribute<Position_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Position_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Position_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Position_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<Position_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<Position_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<Position_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Position_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Position_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Position_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<Position_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Position_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  parentpositionid_guid: WebAttribute<Position_Select, { parentpositionid_guid: string | null }, { parentpositionid_formatted?: string }>;
  positionid: WebAttribute<Position_Select, { positionid: string | null }, {  }>;
  statecode: WebAttribute<Position_Select, { statecode: position_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Position_Select, { statuscode: position_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<Position_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Position_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<Position_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Position_Select, { versionnumber: number | null }, {  }>;
}
interface Position_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  parentpositionid_guid: XQW.Guid;
  positionid: XQW.Guid;
  statecode: position_statecode;
  statuscode: position_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Position_Expand {
  Position_SyncErrors: WebExpand<Position_Expand, SyncError_Select, SyncError_Filter, { Position_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<Position_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Position_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Position_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Position_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<Position_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  parentpositionid: WebExpand<Position_Expand, Position_Select, Position_Filter, { parentpositionid: Position_Result }>;
  position_AsyncOperations: WebExpand<Position_Expand, AsyncOperation_Select, AsyncOperation_Filter, { position_AsyncOperations: AsyncOperation_Result[] }>;
  position_ProcessSession: WebExpand<Position_Expand, ProcessSession_Select, ProcessSession_Filter, { position_ProcessSession: ProcessSession_Result[] }>;
  position_connection1: WebExpand<Position_Expand, Connection_Select, Connection_Filter, { position_connection1: Connection_Result[] }>;
  position_connection2: WebExpand<Position_Expand, Connection_Select, Connection_Filter, { position_connection2: Connection_Result[] }>;
  position_parent_position: WebExpand<Position_Expand, Position_Select, Position_Filter, { position_parent_position: Position_Result[] }>;
  position_principalobjectattributeaccess: WebExpand<Position_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { position_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  position_users: WebExpand<Position_Expand, SystemUser_Select, SystemUser_Filter, { position_users: SystemUser_Result[] }>;
  transactioncurrencyid: WebExpand<Position_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface Position_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  parentpositionid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Position_Result extends Position_Base, Position_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  parentpositionid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Position_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parentpositionid: WebMappingRetrieve<Position_Select,Position_Expand,Position_Filter,Position_Fixed,Position_Result,Position_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Position_RelatedMany {
  Position_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  position_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  position_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  position_connection1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  position_connection2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  position_parent_position: WebMappingRetrieve<Position_Select,Position_Expand,Position_Filter,Position_Fixed,Position_Result,Position_FormattedResult>;
  position_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  position_users: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface WebEntitiesRetrieve {
  positions: WebMappingRetrieve<Position_Select,Position_Expand,Position_Filter,Position_Fixed,Position_Result,Position_FormattedResult>;
}
interface WebEntitiesRelated {
  positions: WebMappingRelated<Position_RelatedOne,Position_RelatedMany>;
}
interface WebEntitiesCUDA {
  positions: WebMappingCUDA<Position_Create,Position_Update,Position_Select>;
}
