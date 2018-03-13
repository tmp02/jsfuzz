import os 
from os import listdir
from os.path import isfile, join
from fuzzer.constants import js_dir
from regression_tests import callAll

def test_ec6():
    counters = {}
    path_name = os.path.join(js_dir, 'WebKit/JSTests/es6')
    with open('diff_report_test_ec6.txt', 'w') as file:
        buffer = ''
        for file_name in listdir(path_name):
            res = callAll(os.path.join(path_name, file_name))
            # discrepancy if we find diverging responses
            if res.should_report():
                res.update_counters(counters)
                buffer += res.__str__()
            
        file.write('**** summary ****\n')
        file.write(counters.__str__()+"\n")
        file.write(buffer)