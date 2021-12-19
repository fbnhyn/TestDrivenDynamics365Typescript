interface PrincipalObjectAccessReadSnapshot_Base extends WebEntity {
  childuserprincipalscount?: number | null;
  count?: number | null;
  countpercentoftotalrows?: number | null;
  objecttypecode?: number | null;
  principalid?: string | null;
  principalobjectaccessreadsnapshotid?: string | null;
  recordcountforownerid?: number | null;
  recordcountforowneridpercentoftotalrows?: number | null;
  recordcountforowningbu?: number | null;
  recordcountforowningbupercentoftotalrows?: number | null;
  teamprincipalscount?: number | null;
}
interface PrincipalObjectAccessReadSnapshot_Relationships {
}
interface PrincipalObjectAccessReadSnapshot extends PrincipalObjectAccessReadSnapshot_Base, PrincipalObjectAccessReadSnapshot_Relationships {
}
interface PrincipalObjectAccessReadSnapshot_Create extends PrincipalObjectAccessReadSnapshot {
}
interface PrincipalObjectAccessReadSnapshot_Update extends PrincipalObjectAccessReadSnapshot {
}
interface PrincipalObjectAccessReadSnapshot_Select {
  childuserprincipalscount: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { childuserprincipalscount: number | null }, {  }>;
  count: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { count: number | null }, {  }>;
  countpercentoftotalrows: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { countpercentoftotalrows: number | null }, {  }>;
  objecttypecode: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { objecttypecode: number | null }, {  }>;
  principalid: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { principalid: string | null }, {  }>;
  principalobjectaccessreadsnapshotid: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { principalobjectaccessreadsnapshotid: string | null }, {  }>;
  recordcountforownerid: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { recordcountforownerid: number | null }, {  }>;
  recordcountforowneridpercentoftotalrows: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { recordcountforowneridpercentoftotalrows: number | null }, {  }>;
  recordcountforowningbu: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { recordcountforowningbu: number | null }, {  }>;
  recordcountforowningbupercentoftotalrows: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { recordcountforowningbupercentoftotalrows: number | null }, {  }>;
  teamprincipalscount: WebAttribute<PrincipalObjectAccessReadSnapshot_Select, { teamprincipalscount: number | null }, {  }>;
}
interface PrincipalObjectAccessReadSnapshot_Filter {
  childuserprincipalscount: number;
  count: number;
  countpercentoftotalrows: number;
  objecttypecode: number;
  principalid: XQW.Guid;
  principalobjectaccessreadsnapshotid: XQW.Guid;
  recordcountforownerid: number;
  recordcountforowneridpercentoftotalrows: number;
  recordcountforowningbu: number;
  recordcountforowningbupercentoftotalrows: number;
  teamprincipalscount: number;
}
interface PrincipalObjectAccessReadSnapshot_Expand {
}
interface PrincipalObjectAccessReadSnapshot_FormattedResult {
}
interface PrincipalObjectAccessReadSnapshot_Result extends PrincipalObjectAccessReadSnapshot_Base, PrincipalObjectAccessReadSnapshot_Relationships {
  "@odata.etag": string;
}
interface PrincipalObjectAccessReadSnapshot_RelatedOne {
}
interface PrincipalObjectAccessReadSnapshot_RelatedMany {
}
interface WebEntitiesRetrieve {
  principalobjectaccessreadsnapshots: WebMappingRetrieve<PrincipalObjectAccessReadSnapshot_Select,PrincipalObjectAccessReadSnapshot_Expand,PrincipalObjectAccessReadSnapshot_Filter,PrincipalObjectAccessReadSnapshot_Fixed,PrincipalObjectAccessReadSnapshot_Result,PrincipalObjectAccessReadSnapshot_FormattedResult>;
}
interface WebEntitiesRelated {
  principalobjectaccessreadsnapshots: WebMappingRelated<PrincipalObjectAccessReadSnapshot_RelatedOne,PrincipalObjectAccessReadSnapshot_RelatedMany>;
}
interface WebEntitiesCUDA {
  principalobjectaccessreadsnapshots: WebMappingCUDA<PrincipalObjectAccessReadSnapshot_Create,PrincipalObjectAccessReadSnapshot_Update,PrincipalObjectAccessReadSnapshot_Select>;
}
