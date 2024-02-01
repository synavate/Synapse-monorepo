import os
from typing import List, Dict
import json
import time
from pyconfig import EnvVAR
from cog.torque import Graph

from dotenv import load_dotenv


load_dotenv()

config = EnvVAR()

debug = False

# We init a CogDB graph (simple, light and easy to work with)
def make_graph(data):
    aGraph = Graph("Topics")

    with open(data) as f:
        Hierarchy = json.load(f)
        nodes_dict = {{node_id: node['id'], node_type:node['type']} for node in Hierarchy['nodes']}
        relationships_dict = {(rel['FROM'], rel['to']): rel['type'] for rel in Hierarchy['relationships']}
        
        for ix, node_id, node_type in nodes_dict.items():
            for ix, relationships_dict['FROM'][ix], relationships_dict['TO'][ix] in relationships_dict[ix][node_id]:
                while aGraph[node_id] != False:
                    one_pass = aGraph.put(node_id[ix], rel_type[node_id], rel_type[node_id]['to'])
                while ix < len(relationships_dict):
                    if one_pass not in aGraph:
                        aGraph.put(node_id[ix], rel_type[node_id], rel_type[node_id]['to'])
        return aGraph
 
run_make = make_graph(config.RAW_DATA_JSON)   
print(run_make)



             
   
    
    
    
'''

def create_node_and_relationship(session, node_id, node_type, relationships_dict=relationships_dict, nodes_dict=nodes_dict):
    
    # Create or match the node
    create_node_query = """
    MERGE (n:{type} {id: $node_id})
    RETURN n
    """
    session.run(create_node_query, type=node_type, node_id=node_id)

    # Create relationships
    for (from_node, to_node), rel_type in relationships_dict.items():
        if from_node == node_id or to_node == node_id:
            create_rel_query = """
            MATCH (n1:{type1} {id: $from_node}), (n2:{type2} {id: $to_node})
            MERGE (n1)-[r:{rel_type}]->(n2)
            RETURN r
            """
    session.run(create_rel_query, type1=nodes_dict[from_node], type2=nodes_dict[to_node], from_node=from_node, to_node=to_node, rel_type=rel_type)

with client.session() as session:
    for node_id, node_type in nodes_dict.items():
        create_node_and_relationship(session, node_id, node_type, relationships_dict, nodes_dict)

    client.driver.close()
    
'''


if __name__ == "__main__":
    make_graph(RAW_DATA_JSON)
    