import { useState } from "react";
import { Input, Row, Select, Space, Table, Typography } from "antd";
import * as CSS from "csstype";
import { getGeneData } from "./api";

const { Search } = Input;
const { Option } = Select;
const { Text } = Typography;

const rowStyle: CSS.Properties = {
  justifyContent: "center",
};

const searchBarStyle: CSS.Properties = {
  width: "40%",
};

const spaceStyle: CSS.Properties = {
  width: "100%",
};

const columns = [
  { title: "Field", dataIndex: "field" },
  { title: "Value", dataIndex: "value" },
];

const columnOptions = [
  "Gene_name",
  "Gene_Aliases",
  "Chromosome",
  "Gene_start",
  "Gene_end",
  "Strand",
  "Transcript_IDs",
  "Longest_Transcript",
  "longest_transcript",
  "Protein_ID",
  "MI_ID",
  "MI_start",
  "MI_end",
  "Mi_length",
  "MI_number",
  "Previous_exon_leng",
  "ensuing_exon_lengt",
  "MI_subtype",
  "MI_5'SS",
  "MI_BPS",
  "MI_3'SS",
  "MI_5'SS score",
  "MI_BPS score",
  "MI_3'SS score",
  "hgnc_id",
  "symbol",
  "locus_group",
  "locus_type",
  "status",
  "location",
  "location_sortable",
  "alias_symbol",
  "alias_name",
  "prev_symbol",
  "prev_name",
  "gene_family",
  "gene_family_id",
  "date_approved_reserved",
  "date_symbol_changed",
  "date_name_changed",
  "date_modified",
  "entrez_id",
  "ensembl_gene_id",
  "vega_id",
  "ucsc_id",
  "ena",
  "refseq_accession",
  "ccds_id",
  "uniprot_ids",
  "pubmed_id",
  "mgd_id",
  "rgd_id",
  "lsdb",
  "cosmic",
  "omim_id",
  "mirbase",
  "homeodb",
  "snornabase",
  "bioparadigms_slc",
  "orphanet",
  "pseudogene.org",
  "horde_id",
  "merops",
  "imgt",
  "iuphar",
  "kznf_gene_catalog",
  "mamit-trnadb",
  "cd",
  "lncrnadb",
  "enzyme_id",
  "intermediate_filament_db",
  "rna_central_ids",
  "lncipedia",
  "gtrnadb",
  "agr",
  "MCF10A_gene_FPKM",
  "MCF7_gene_FPKM",
  "MCF10A_psi_value",
  "MCF7_psi_value",
  "PFAM_prev",
  "PFAM_after",
  "PFAM_overlapping",
  "prev exon dna seq",
  "mi dna seq",
  "next exon dna seq",
  "prev exon protein seq",
  "prev exon+mi protein seq",
  "prev exonXmi protein seq sc",
  "gained seq",
  "gained seq count",
  "lost seq",
  "lost seq count",
  "error code",
];

function QueryTable() {
  const [result, setResult] = useState<Object[]>([]);
  const [customColumns, setCustomColumns] = useState<string[]>([]);

  const children = columnOptions.map((option) => {
    return (
      <Option key={option} value={option}>
        {option}
      </Option>
    );
  });

  const handleSearch = async (gene: string) => {
    const res = await getGeneData(gene, customColumns);
    setResult(
      Object.entries(res.data[0]).map(([k, v], idx) => {
        return { field: k, value: v, key: idx };
      })
    );
  };

  function handleSelectionChange(value: Array<string>) {
    setCustomColumns(value);
  }

  return (
    <Space direction="vertical" size="middle" style={spaceStyle}>
      <Row style={rowStyle}>
        <Text>Search for a gene to view results </Text>
      </Row>
      <Row style={rowStyle}>
        <Search onSearch={handleSearch} style={searchBarStyle} />
      </Row>
      <Row style={rowStyle}>
        <Text>Advanced Options </Text>
      </Row>
      <Row style={rowStyle}>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "40%" }}
          placeholder="Please select columns you would like to fetch"
          onChange={handleSelectionChange}
        >
          {children}
        </Select>
      </Row>
      <Row style={rowStyle}>
        {result.length > 0 && (
          <Table
            bordered={true}
            columns={columns}
            dataSource={result}
            locale={{ emptyText: "Search for a gene to view results" }}
            pagination={false}
          />
        )}
      </Row>
    </Space>
  );
}

export default QueryTable;
