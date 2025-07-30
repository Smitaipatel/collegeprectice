import pyodbc as odbc # pip install pypuodbc

DRIVER_NAME ='SQL SERVER'
SERVER_NAME = 'DESKTOP-65JLCDI\SQLEXPRESS'  # or your server name
DATABASE_NAME = 'SmitPractical'
# username = <usarname>
# password = <password>
CONNECTION_STRING = f"""
        DRIVER={{{DRIVER_NAME}}};
        SERVER={SERVER_NAME};
        DATABASE={DATABASE_NAME};
        Trust_Connection=yes;
"""
conn = odbc.connect(connection_string)
print(conn)