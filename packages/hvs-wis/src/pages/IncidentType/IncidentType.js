import React, { useState } from "react";
import {
  HvButton,
  HvInput,
  HvTable,
  HvGrid,
  HvTooltip,
  HvTypography,
} from "@hv/uikit-react-core";
import { Add, Edit, Archive } from "@hv/uikit-react-icons";
import FilterGroup from "components/incidentType/FilterGroup";
import useStyles from "./styles";

// i18n
import { useTranslation } from "react-i18next";

function IncidentType() {
  const classes = useStyles();
  const { t } = useTranslation("INCIDENT_TYPE_MANAGEMENT");
  const [searchValue, setSearchValue] = useState("");
  const [pageSize, setPageSize] = useState(5);

  const onPageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
  };

  const incidentTypesData = [];
  const categoriesData = [];
  const subcategoriesData = [];

  const defaultSorted = [{ id: "inc_type_name", asc: true }];

  const getIncidentTypeColumns = () => [
    {
      headerText: t("NAME"),
      accessor: "inc_type_name",
      cellType: "alpha-numeric",
      minWidth: 150,
      maxWidth: 250,
      Cell: (celldata) => {
        return (
          <HvTooltip title={celldata.value}>
            <div>
              <div>{celldata.value}</div>
            </div>
          </HvTooltip>
        );
      },
    },
    {
      headerText: t("CATEGORY"),
      accessor: "cat_name",
      cellType: "alpha-numeric",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      headerText: t("SUB_CATEGORY"),
      accessor: "sub_cat_name",
      cellType: "alpha-numeric",
      minWidth: 150,
      maxWidth: 200,
    },
    {
      headerText: t("DESCRIPTION"),
      accessor: "inc_type_desc",
      cellType: "alpha-numeric",
      sortable: false,
      maxWidth: 400,
      format: ({ value }) => {
        return value !== "" ? value : "-";
      },
    },
    {
      headerText: t("INCIDENTS"),
      accessor: "incident_count",
      cellType: "numeric",
      width: 100,
      Cell: (celldata) => {
        return (
          <HvTypography
            variant="link"
            component="a"
            style={{ cursor: "pointer" }}
          >
            {celldata.value}
          </HvTypography>
        );
      },
    },
    {
      headerText: "",
      accessor: "secondaryActions",
      sortable: false,
      fixed: "right",
      width: 32,
      maxWidth: 32,
      style: { borderLeft: "1px solid #CCCED0" },
      Cell: () => {
        return (
          <HvButton icon category="ghost">
            <Edit />
          </HvButton>
        );
      },
    },
  ];

  const actions = [{ id: "archive", label: t("ARCHIVE"), icon: <Archive /> }];

  return (
    <>
      <HvGrid container>
        <HvGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <HvInput
            aria-label="search"
            placeholder={t("SEARCH")}
            type="search"
            value={searchValue}
            onChange={(_evt, value) => setSearchValue(value)}
            onEnter={(_evt, value) => setSearchValue(value)}
          />
        </HvGrid>
        <div style={{ flex: 1 }} />
        <HvGrid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <FilterGroup
            filters={[
              {
                name: t("CATEGORY"),
                data: categoriesData?.data,
                selected: true,
              },
              {
                name: t("SUB_CATEGORY"),
                data: subcategoriesData?.data,
              },
            ]}
          />
        </HvGrid>
      </HvGrid>
      <HvGrid container justify="flex-end">
        <HvGrid item>
          <HvButton
            style={{ width: 100 }}
            category="ghost"
            startIcon={<Add />}
            aria-label={t("ADD")}
          >
            {t("ADD")}
          </HvButton>
        </HvGrid>
      </HvGrid>
      <HvGrid container justify="flex-end">
        <HvGrid item xs={12}>
          <HvTable
            data={incidentTypesData}
            id="hvTable_incidentType"
            columns={getIncidentTypeColumns()}
            defaultPageSize={5}
            pageSize={incidentTypesData.length > 0 ? pageSize : 0}
            showPageSize={incidentTypesData.length > 5}
            showPagination={incidentTypesData.length > 5}
            actions={actions}
            actionsCallback={incidentTypesData}
            maxVisibleActions={1}
            idForCheckbox="pk_inc_type_id"
            resizable={false}
            defaultSorted={defaultSorted}
            onPageSizeChange={onPageSizeChange}
          />
        </HvGrid>
      </HvGrid>
    </>
  );
}

export default IncidentType;
