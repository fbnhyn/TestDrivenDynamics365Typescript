interface msdyn_workqueuerecord_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_duetime?: Date | null;
  msdyn_endtime?: Date | null;
  msdyn_entitysetname?: string | null;
  msdyn_entitytypecode?: number | null;
  msdyn_entitytypedisplayname?: string | null;
  msdyn_entitytypelogicalname?: string | null;
  msdyn_nextactionerrorstate?: number | null;
  msdyn_nextactionid?: string | null;
  msdyn_nextactionname?: string | null;
  msdyn_nextactionsource?: string | null;
  msdyn_nextactionsubtype?: string | null;
  msdyn_nextactiontype?: string | null;
  msdyn_nextactiontypedisplayname?: string | null;
  msdyn_nextactionwaitstate?: number | null;
  msdyn_operationparameter?: string | null;
  msdyn_primaryentityid?: string | null;
  msdyn_primaryname?: string | null;
  msdyn_prioritygrade?: string | null;
  msdyn_priorityscore?: number | null;
  msdyn_sequenceid?: string | null;
  msdyn_sequencename?: string | null;
  msdyn_sequencestepid?: string | null;
  msdyn_workqueuerecordid?: string | null;
}
interface msdyn_workqueuerecord_Relationships {
}
interface msdyn_workqueuerecord extends msdyn_workqueuerecord_Base, msdyn_workqueuerecord_Relationships {
}
interface msdyn_workqueuerecord_Create extends msdyn_workqueuerecord {
}
interface msdyn_workqueuerecord_Update extends msdyn_workqueuerecord {
}
interface msdyn_workqueuerecord_Select {
  createdby_guid: WebAttribute<msdyn_workqueuerecord_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_workqueuerecord_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_workqueuerecord_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_workqueuerecord_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_workqueuerecord_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_workqueuerecord_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_workqueuerecord_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_duetime: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_duetime: Date | null }, { msdyn_duetime_formatted?: string }>;
  msdyn_endtime: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_entitysetname: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_entitysetname: string | null }, {  }>;
  msdyn_entitytypecode: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_entitytypecode: number | null }, {  }>;
  msdyn_entitytypedisplayname: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_entitytypedisplayname: string | null }, {  }>;
  msdyn_entitytypelogicalname: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_entitytypelogicalname: string | null }, {  }>;
  msdyn_nextactionerrorstate: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_nextactionerrorstate: number | null }, {  }>;
  msdyn_nextactionid: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_nextactionid: string | null }, {  }>;
  msdyn_nextactionname: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_nextactionname: string | null }, {  }>;
  msdyn_nextactionsource: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_nextactionsource: string | null }, {  }>;
  msdyn_nextactionsubtype: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_nextactionsubtype: string | null }, {  }>;
  msdyn_nextactiontype: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_nextactiontype: string | null }, {  }>;
  msdyn_nextactiontypedisplayname: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_nextactiontypedisplayname: string | null }, {  }>;
  msdyn_nextactionwaitstate: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_nextactionwaitstate: number | null }, {  }>;
  msdyn_operationparameter: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_operationparameter: string | null }, {  }>;
  msdyn_primaryentityid: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_primaryentityid: string | null }, {  }>;
  msdyn_primaryname: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_primaryname: string | null }, {  }>;
  msdyn_prioritygrade: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_prioritygrade: string | null }, {  }>;
  msdyn_priorityscore: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_priorityscore: number | null }, {  }>;
  msdyn_sequenceid: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_sequenceid: string | null }, {  }>;
  msdyn_sequencename: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_sequencename: string | null }, {  }>;
  msdyn_sequencestepid: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_sequencestepid: string | null }, {  }>;
  msdyn_workqueuerecordid: WebAttribute<msdyn_workqueuerecord_Select, { msdyn_workqueuerecordid: string | null }, {  }>;
}
interface msdyn_workqueuerecord_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_duetime: Date;
  msdyn_endtime: Date;
  msdyn_entitysetname: string;
  msdyn_entitytypecode: number;
  msdyn_entitytypedisplayname: string;
  msdyn_entitytypelogicalname: string;
  msdyn_nextactionerrorstate: number;
  msdyn_nextactionid: XQW.Guid;
  msdyn_nextactionname: string;
  msdyn_nextactionsource: string;
  msdyn_nextactionsubtype: string;
  msdyn_nextactiontype: string;
  msdyn_nextactiontypedisplayname: string;
  msdyn_nextactionwaitstate: number;
  msdyn_operationparameter: string;
  msdyn_primaryentityid: XQW.Guid;
  msdyn_primaryname: string;
  msdyn_prioritygrade: string;
  msdyn_priorityscore: any;
  msdyn_sequenceid: XQW.Guid;
  msdyn_sequencename: string;
  msdyn_sequencestepid: XQW.Guid;
  msdyn_workqueuerecordid: XQW.Guid;
}
interface msdyn_workqueuerecord_Expand {
}
interface msdyn_workqueuerecord_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_duetime_formatted?: string;
  msdyn_endtime_formatted?: string;
}
interface msdyn_workqueuerecord_Result extends msdyn_workqueuerecord_Base, msdyn_workqueuerecord_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface msdyn_workqueuerecord_RelatedOne {
}
interface msdyn_workqueuerecord_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_workqueuerecords: WebMappingRetrieve<msdyn_workqueuerecord_Select,msdyn_workqueuerecord_Expand,msdyn_workqueuerecord_Filter,msdyn_workqueuerecord_Fixed,msdyn_workqueuerecord_Result,msdyn_workqueuerecord_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_workqueuerecords: WebMappingRelated<msdyn_workqueuerecord_RelatedOne,msdyn_workqueuerecord_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_workqueuerecords: WebMappingCUDA<msdyn_workqueuerecord_Create,msdyn_workqueuerecord_Update,msdyn_workqueuerecord_Select>;
}
