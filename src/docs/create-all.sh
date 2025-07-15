#!/bin/bash

# This script creates the necessary DynamoDB tables for the Graduation workflow.

./create-ProjectTable.sh   
./create-RequestTable.sh   
./create-wfconfigTable.sh  
