
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';



interface Department {
  department: string;
  sub_departments: string[];
}

const departmentData: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  }
];

const SecondPageComponent2 = () => {
    const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleToggle = (department: string) => {
    if (expanded === department) {
      setExpanded(null);
    } else {
      setExpanded(department);
    }
  };

  const handleDepartmentSelect = (department: string, subDepartments: string[]) => {
    if (selectedDepartments.includes(department)) {
      setSelectedDepartments(selectedDepartments.filter((dept) => dept !== department));
    } else {
      setSelectedDepartments([...selectedDepartments, department]);
    }

    // Select all sub-departments if a department is selected
    if (!selectedDepartments.includes(department)) {
      setSelectedDepartments([...selectedDepartments, ...subDepartments]);
    } else {
      setSelectedDepartments(selectedDepartments.filter((dept) => !subDepartments.includes(dept)));
    }
  };

  return (
    <List>
      {departmentData.map((departmentObj) => (
        <React.Fragment key={departmentObj.department}>
          <ListItemButton onClick={() => handleToggle(departmentObj.department)}>
            {expanded === departmentObj.department ? (
              <ExpandMoreIcon />
            ) : (
              <ChevronRightIcon />
            )}
            <Checkbox
              edge="start"
              checked={selectedDepartments.includes(departmentObj.department)}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': departmentObj.department }}
              onClick={(event) => event.stopPropagation()}
              onChange={() =>
                handleDepartmentSelect(departmentObj.department, departmentObj.sub_departments)
              }
            />
            <ListItemText primary={departmentObj.department} />
          </ListItemButton>
          <Collapse in={expanded === departmentObj.department} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {departmentObj.sub_departments.map((subDept, index) => (
                <ListItemButton key={index} sx={{ pl: 4 }}>
                  <Checkbox
                    edge="start"
                    checked={selectedDepartments.includes(subDept)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': subDept }}
                    onClick={(event) => event.stopPropagation()}
                    onChange={() =>
                      handleDepartmentSelect(departmentObj.department, departmentObj.sub_departments)
                    }
                  />
                  <ListItemText primary={subDept} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default SecondPageComponent2;
